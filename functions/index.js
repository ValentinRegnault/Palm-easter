const functions = require("firebase-functions");
const admin = require('firebase-admin');
const { getDatabase, ref, get, child } = require('firebase-admin/database');
const {SECRET_CODE} = require("./secret-code.json"); 
const { ObjectRendererSystem } = require("pixi.js");

admin.initializeApp()

const db = getDatabase();

const QUESTION_MAX_LEVEL = 5
const QUESTIONS_COUNT = 10

const QUESTIONS_COUNT_BY_LEVEL = [2, 2, 2, 3, 1]


exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});


exports.deployQuestions = functions.https.onRequest((req, res) => {
    if(!req.query.secretCode || req.query.secretCode != SECRET_CODE) {
        res.status(403).send("Le code secret " + req.query.secretCode + " n'est pas valide :/")
    }

    functions.logger.info("Deploying questions to the database...")
    const questions = require("./questions.json");  

    const questionsRef = db.ref("questions");

    questionsRef.set({});

    let updates = {}

    for (const question of questions) {
        updates[questionsRef.push().key] = question;
    }

    questionsRef.update(updates).then(() => {
        res.status(200).send("Questions loaded to database !")
    })
    .catch(() => {
        res.status(403).send("An error occured :/");
    })
})

exports.onUserCreated = functions.database.ref("/users/{userId}")
    .onCreate(async (snapshot, context) => {
        let questions = await ref.once("/questions")

        let choosenQuestions = []
        for (let i = 0; i < QUESTIONS_COUNT_BY_LEVEL.length; i++) {
            let questionsLevelI = questions.filter(q => q.level == i); 
            let differentQuestion = 0;
            while (differentQuestion < QUESTIONS_COUNT_BY_LEVEL[i]) {
                let rdIndex = Math.floor(Math.random() * questionsLevelI.length)
                if (!choosenQuestions.includes(rdIndex)) {
                    choosenQuestions.push(rdIndex)
                    differentQuestion++
                }
            }
        }

        let allQuestionsIds = Object.keys(questions)
        let choosenQuestionsIds = choosenQuestions.map(index => allQuestionsIds[index])

        snapshot.ref.update({
            questions: choosenQuestionsIds
        })
    })