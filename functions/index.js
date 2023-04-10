const { SECRET_CODE } = require("./secret-code.json");
const PATHS = require("./parcours.json");
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { log } = require("firebase-functions/logger");
admin.initializeApp();
const db = admin.database();

const COOLDOWN_MILISECONDS = 1000*60*60 // 1h

// const QUESTION_MAX_LEVEL = 5
// const QUESTIONS_COUNT = 10

const QUESTIONS_COUNT_BY_LEVEL = [0, 1, 1, 1, 1, 1, 1, 1]


exports.onUserCreated = functions.database.ref("/users/{userId}")
    .onCreate(async (snapshot, context) => {
        console.log("A user was created, generating questions")
        let allQuestions = (await snapshot.ref.root.child("questions").get()).val();

        let path = snapshot.val().currentPath;
        console.log(path, PATHS, PATHS.includes(path))
        if (!path || !PATHS.includes(path)) {
            console.log("Path choosen by user is not valid, deleting user");
            await snapshot.ref.set(null);
            return;
        }

        let choosenQuestionsIds = []
        for (let i = 0; i < QUESTIONS_COUNT_BY_LEVEL.length; i++) {
            let questionsLevelI = Object.entries(allQuestions).filter(([id, q]) => q.level == i && q.path == path);
            let differentQuestion = 0;
            while (differentQuestion < QUESTIONS_COUNT_BY_LEVEL[i]) {
                let randomId = Math.floor(Math.random() * questionsLevelI.length)
                let randomQuestion = questionsLevelI[randomId]
                if (!choosenQuestionsIds.includes(randomQuestion[0])) {
                    choosenQuestionsIds.push(randomQuestion[0])
                    differentQuestion++
                }
            }
        }

        let choosenQuestions = {}
        for (const ids of choosenQuestionsIds) {
            choosenQuestions[ids] = {
                validated: false,
                validationDate: null
            }
        }

        console.log(choosenQuestions)

        snapshot.ref.update({
            chocolatesCount: 0,
            questions: choosenQuestions
        })
    })

/**
 * Validate if a answer is the right answer
 * @param questionId the id of the question
 * @param studentNumber the student answering the question
 * @param studentAnswer the answer sent by the student
 * @param path The path currently played by the student
 */
exports.validateQuestion = functions.https.onCall(async (data, ctx) => {
    if (data.questionId == undefined || data.studentNumber == undefined || data.studentAnswer == undefined || data.path == undefined) throw new functions.https.HttpsError("invalid-argument", "Arguments are missing. You should call validateQuestion with arguments : questionId, studentNumber, studentAnswer, path")

    console.log("validating question : ", data)
    let question = (await db.ref("questions/" + data.questionId).get()).val()
    return db.ref("users/" + data.studentNumber + "/questions/" + data.questionId).get().then(async questionSnap => {
        if (!questionSnap.exists()) throw new functions.https.HttpsError("invalid-argument", "The question " + data.questionId + " does not exist");

        if(questionSnap.child("lastTryDate").exists()) {
            let lastTryDate = questionSnap.child("lastTryDate").val()
            console.log(new Date(lastTryDate + COOLDOWN_MILISECONDS), new Date(lastTryDate + COOLDOWN_MILISECONDS));
            if(lastTryDate + COOLDOWN_MILISECONDS > Date.now()) {
                throw new functions.https.HttpsError("permission-denied", "You have to wait " + (lastTryDate + COOLDOWN_MILISECONDS - Date.now()) + " seconds before trying again")
            }
        }

        let isCorrect;
        if (question.questionType == "textAnswer" || question.questionType == "singleChoice") {
            isCorrect = question.answer.toLowerCase() == data.studentAnswer.toLowerCase();
        }
        else if (question.questionType == "multipleChoices") {
            isCorrect = question.answer.length == data.studentAnswer.length && question.answer.every((a, i) => data.studentAnswer.includes(a.toLowerCase()))
        }
        else {
            throw new functions.https.HttpsError("invalid-argument", "The question type " + question.questionType + " is not valid");
        }

        if (isCorrect) {
            console.log("Correct answer");
            questionSnap
                .ref
                .update({
                    validated: true,
                    validationDate: Date.now()
                })

            let userSnap = await db.ref("users/" + data.studentNumber).get()
            userSnap.ref.update({ chocolatesCount: userSnap.val().chocolatesCount + 1 })
            console.log(userSnap.val());
            if ((userSnap.val().endedPath == undefined || userSnap.val().endedPath[data.path] == undefined)
                && Object.values(userSnap.val().questions).every(q => q.validated)
            ) {
                let obj = {}
                obj[data.path] = Date.now()
                userSnap.ref.child("endedPath").update(obj)
            }
            return { correct: true }
        }
        else {
            console.log("Wrong answer");
            questionSnap
                .ref
                .update({
                    lastTryDate: Date.now()
                })
            return { correct: false }
        }
    })

})

/** Reset le compteur de chocolat d'un joueur
 * @param studentNumber le numéro étudiant du joueurs
 * @param secretCode le code secret
 */
exports.resetChocolates = functions.https.onCall((data, ctx) => {
    if (data.secretCode != SECRET_CODE) throw new functions.https.HttpsError("permission-denied", "Le code secret " + data.secretCode + " est incorrect");
    if (!data.studentNumber) throw new functions.https.HttpsError("invalid-argument", "Le numéro étudiant est incorrect")

    db.ref("users/" + data.studentNumber).update({ chocolatesCount: 0 })

    return true
}) 


