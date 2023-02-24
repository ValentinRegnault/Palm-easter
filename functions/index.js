const {SECRET_CODE} = require("./secret-code.json"); 
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const { user, HttpsError } = require("firebase-functions/v1/auth");
admin.initializeApp();
const db = admin.database();


// const QUESTION_MAX_LEVEL = 5
// const QUESTIONS_COUNT = 10

const QUESTIONS_COUNT_BY_LEVEL = [0,1]


exports.deployQuestions = functions.https.onRequest((req, res) => {
    console.log(SECRET_CODE)
    if(!req.query.secretCode || req.query.secretCode != SECRET_CODE) {
        res.status(403).send("Le code secret " + req.query.secretCode + " n'est pas valide :/");
        return
    }

    functions.logger.info("Deploying questions to the database...");
    const questions = require("./questions.json"); 
    const paths = require("./parcours.json") 

    const questionsRef = db.ref("questions");

    questionsRef.set({});

    let updates = {};

    for (const question of questions) {
        updates[questionsRef.push().key] = question;
    }

    questionsRef.update(updates).then(() => {
        res.status(200).send("Questions loaded to database !");
    })
    .catch(() => {
        res.status(403).send("An error occured :/");
    })

    db.ref("paths").set(paths);
})


exports.onUserCreated = functions.database.ref("/users/{userId}")
    .onCreate(async (snapshot, context) => {
        console.log("A user was created, generating questions")
        let allQuestions = (await snapshot.ref.root.child("questions").get()).val();

        let choosenQuestionsIndices = []
        for (let i = 0; i < QUESTIONS_COUNT_BY_LEVEL.length; i++) {
            let questionsLevelI = Object.values(allQuestions).filter(q => q.level == i);
            let differentQuestion = 0;
            while (differentQuestion < QUESTIONS_COUNT_BY_LEVEL[i]) {
                let rdIndex = Math.floor(Math.random() * questionsLevelI.length)
                if (!choosenQuestionsIndices.includes(rdIndex)) {
                    choosenQuestionsIndices.push(rdIndex)
                    differentQuestion++
                }
            }
        }

        let allQuestionsIds = Object.keys(allQuestions)
        let choosenQuestions = {}
        for (const index of choosenQuestionsIndices) {
            choosenQuestions[allQuestionsIds[index]] = {
                validated: false,
                validationDate: null
            }
        }
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
    if (!data.questionId || !data.studentNumber || !data.studentAnswer || !data.path) throw new functions.https.HttpsError("invalid-argument", "Arguments are missing. You should call validateQuestion with arguments : questionId, studentNumber, studentAnswer, path")

    console.log("validate question : ", data)
    let question = (await db.ref("questions/" + data.questionId).get()).val()
    return db.ref("users/" + data.studentNumber + "/questions/" + data.questionId).get().then(async questionSnap => {
        if (questionSnap.exists() && data.studentAnswer == question.answer) {
            questionSnap
                .ref
                .update({
                    validated: true,
                    validationDate: Date.now()
                })

            let userSnap = await db.ref("users/" + data.studentNumber).get()
            userSnap.ref.update({chocolatesCount: userSnap.val().chocolatesCount + 1})
            console.log(userSnap.val());
            if((userSnap.val().endedPath == undefined || userSnap.val().endedPath[data.path] == undefined)
                && Object.values(userSnap.val().questions).every(q => q.validated)
            ) {
                let obj = {}
                obj[data.path] = Date.now()
                userSnap.ref.child("endedPath").update(obj)   
            }
            return {correct: true}
        }
        else {
            return {correct: false}
        }
    })
    
})

