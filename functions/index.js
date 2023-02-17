const functions = require("firebase-functions");
const admin = require('firebase-admin');
const { getDatabase } = require('firebase-admin/database');
const {SECRET_CODE} = require("./secret-code.json") 

admin.initializeApp()

const db = getDatabase();


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

    db.ref("questions").set(questions).then(() => {
        res.status(200).send("Questions loaded to database !")
    })
    .catch(() => {
        res.status(403).send("An error occured :/");
    })

})