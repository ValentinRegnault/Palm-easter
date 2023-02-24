<script>
  import { initializeApp } from "firebase/app";
  import { getFunctions, httpsCallable, connectFunctionsEmulator } from 'firebase/functions';
  import { get, getDatabase, onValue, ref, set, update, child, connectDatabaseEmulator} from "firebase/database";
  import AuthentificationPage from "./lib/AuthentificationPage.svelte"
  import ChoiceInput from "./lib/ChoiceInput.svelte";
  import TextInput from "./lib/TextInput.svelte";
  import ChoosePath from "./lib/ChoosePath.svelte";
  import Home from "./lib/Home.svelte"
  import CheckAnswerButton from "./lib/checkAnswerButton.svelte";
  import AdministrationPage from "./lib/AdministrationPage.svelte";

  const firebaseConfig = {
    apiKey: "AIzaSyCVyWcwjE_Mc5dTkzTghQpVE9G0mRqjkUk",
    authDomain: "palmevent-by-palme.firebaseapp.com",
    databaseURL: "https://palmevent-by-palme-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "palmevent-by-palme",
    storageBucket: "palmevent-by-palme.appspot.com",
    messagingSenderId: "1046101382717",
    appId: "1:1046101382717:web:d8cc41a4a9f426a0da3c54",
    measurementId: "G-EQ844GLK3B"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const functions = getFunctions(firebaseApp)
  const requestValidateQuestion = httpsCallable(functions, "validateQuestion")
  const db = getDatabase();

  if(window.location.hostname == "localhost" || window.location.hostname == "127.0.0.1") {
    console.log("Running in emulator !");
    connectDatabaseEmulator(db, "localhost", 9000)
    connectFunctionsEmulator(functions, "localhost", 5001)
  }

  const dbRef = ref(db)
  let paths; 
  let studentNumber;
  let firstName;
  let lastName;
  let currentQuestion;
  let userAnswer;
  let checkAnswerButtonState = 0;
  let currentPath;

  get(child(dbRef, "paths")).then(ps => paths = ps.val())


  function listenQuestions() {
    get(child(dbRef, `users/${studentNumber}`)).then((snapshot) => {
      if (!snapshot.exists()) {
        currentPage = 3
      } 
      else {
        currentPage = 4;
        onValue(child(dbRef, `users/${studentNumber}/questions`), onQuestionsUpdated)
      }

    }).catch((error) => {
      console.error(error);
    });

  }

  function setPath(path) {
    console.log(path);
    currentPath = path
    update(child(dbRef, `users/${studentNumber}`), {firstName, lastName, currentPath: path})
    onValue(child(dbRef, `users/${studentNumber}/questions`), onQuestionsUpdated)
  }

  
  function onQuestionsUpdated(snapshot) {
    if (!snapshot.exists()) return;
    let questions = snapshot.val();
    console.log("Questions updated !", questions)
    let firstUnansweredQuestion = Object.entries(questions).find(q => !q[1].validated);

    if(!firstUnansweredQuestion) {
      currentPage = 5
      return
    }

    Promise.all([
      get(child(dbRef, "questions/" + firstUnansweredQuestion[0] + "/questionText")),
      get(child(dbRef, "questions/" + firstUnansweredQuestion[0] + "/questionType")),
      get(child(dbRef, "questions/" + firstUnansweredQuestion[0] + "/choices"))
    ])
    .then((snapshots) => {
      currentQuestion = {
        questionId: firstUnansweredQuestion[0],
        questionText: snapshots[0].val(),
        questionType: snapshots[1].val(),
        choices: snapshots[2].val(),
      }
    })
  }

  function checkAnswer() {
    requestValidateQuestion({
      questionId: currentQuestion.questionId,
      studentNumber,
      studentAnswer: userAnswer,
      path: currentPath
    })
    .then((response) => {
      console.log("coucou !")
      if(response.data.correct) {
        console.log("correct answer !")
        checkAnswerButtonState = 2
      }
      else {
        console.log("incorrect answer !")
        checkAnswerButtonState = 3
      }
    })
    .catch(console.err)
  }

  let currentPage = 0;
</script>

<main class="font-titan-one flex flex-col min-h-[100vh]">
  <div class="big-header items-center pb-[5%]">
    <img 
        class="shrink min-w-0 min-h-0"
        src="src/assets/logo-palmeaster.png" 
        alt=""
    > 
    <h1 class="text-xl text-beige px-[5%]">Bienvenue dans l'aventure Palm'easter !</h1>
  </div>
  {#if window.location.pathname == "/admin"}
    <AdministrationPage functions={functions} database={db} paths={paths}></AdministrationPage>
  {:else if currentPage == 0} 
    <Home on:next={() => currentPage = 1}></Home>
  {:else if currentPage == 1} 
    <AuthentificationPage on:submit={(e) => {
      studentNumber = e.detail.studentNumber
      firstName = e.detail.firstName
      lastName = e.detail.lastName
      listenQuestions()
    }}></AuthentificationPage> 
  {:else if currentPage == 3}
    <ChoosePath paths={paths} on:path-choosen={(e) => {setPath(e.detail.path); currentPage = 4}}></ChoosePath>
  {:else if currentPage == 4 && currentQuestion}
    <div>
      <h1>{currentQuestion.questionText}</h1>
      {#if currentQuestion.questionType == "multipleChoices"}
        <ChoiceInput bind:value={userAnswer}></ChoiceInput>
      {:else if currentQuestion.questionText == "textAnswer"}
        <TextInput bind:value={userAnswer}></TextInput>
      {/if}
      <CheckAnswerButton on:click={() => checkAnswer()} state={checkAnswerButtonState}></CheckAnswerButton>
    </div>
  {:else if currentPage == 5} 
    <h1>Félicitation ! Vous avez terminer votre parcours ! Vous pouvez passer à la Palme récupérer vos récompenses et découvrir si vous êtes le premier à avoir terminer ce parcours !</h1>
  {/if} 
</main>


<style>
  .big-header {
    height: 40vh;
    display: flex;
    flex-direction: column;
    background-color: #494EB0;
    border-bottom-width: 4px;
    border-style: solid;
    border-image: linear-gradient(90deg, #D667DC 0%, #EC96B3 6.25%, #E7AD43 13.54%, #A8ED84 23.44%, #E13F85 47.92%, #DAA813 72.92%, #AC4D1B 100%) 1;
  }

  .mini-header {
    background-color: #494EB0;
    width: 100%; 
    height: 10vh;
    display: flex;
    flex-direction: row;
    border-bottom-width: 4px;
    border-style: solid;
    border-image: linear-gradient(90deg, #D667DC 0%, #EC96B3 6.25%, #E7AD43 13.54%, #A8ED84 23.44%, #E13F85 47.92%, #DAA813 72.92%, #AC4D1B 100%) 1;
  }

</style>