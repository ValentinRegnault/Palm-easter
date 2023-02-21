const {SECRET_CODE} = require("./secret-code.json"); 
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
const db = admin.database();


// const QUESTION_MAX_LEVEL = 5
// const QUESTIONS_COUNT = 10

const QUESTIONS_COUNT_BY_LEVEL = [0,1]


exports.deployQuestions = functions.https.onRequest((req, res) => {
    if(!req.query.secretCode || req.query.secretCode != SECRET_CODE) {
        res.status(403).send("Le code secret " + req.query.secretCode + " n'est pas valide :/");
    }

    functions.logger.info("Deploying questions to the database...");
    const questions = require("./questions.json");  

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
            questions: choosenQuestions
        })
    })

/**
 * Validate if a answer is the right answer
 * @param questionId the id of the question
 * @param studentNumber the student answering the question
 * @param studentAnswer the answer sent by the student
 */
exports.validateQuestion = functions.https.onRequest(async (req, res) => {
    let question = (await db.ref("questions/" + req.query.questionId).get()).val()
    db.ref("users/" + req.query.studentNumber + "/questions/" + req.query.questionId).get().then(userSnap => {
        console.log("validate question : ", userSnap.exists())
        if (req.query.studentAnswer == question.answer && userSnap.exists()) {
            res.send({correct: true})
            userSnap
                .ref
                .update({
                    validated: true,
                    validationDate: Date.now()
                })
        }
        else {
            res.send({correct: false})
        }
    })
    
})