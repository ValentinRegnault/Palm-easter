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

  let studentNumber;
  let firstName;
  let lastName;
  let currentQuestion;
  let userAnswer;
  let checkAnswerButtonState = 0;

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
    set(child(dbRef, `users/${studentNumber}`), {firstName, lastName, path})
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
      studentAnswer: userAnswer
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

<main class="font-titan-one">
  <div class="bg-primary-blue">
    <div class="h-[30vh] flex items-center justify-center">
        <img 
            class="h-full"
            src="src/assets/logo-palmeaster.png" 
            alt=""
        >
    </div>
    <h1 class="text-xl">Bienvenue dans l'aventure Palm'easter !</h1>
    <div class="w-[100%] h-[1vh] gradient "></div>
  </div>
  {#if currentPage == 0} 
    <Home on:next={() => currentPage = 1}></Home>
  {:else if currentPage == 1} 
    <AuthentificationPage on:submit={(e) => {
      studentNumber = e.detail.studentNumber
      firstName = e.detail.firstName
      lastName = e.detail.lastName
      listenQuestions()
    }}></AuthentificationPage> 
  {:else if currentPage == 3}
    <ChoosePath on:path-choosen={(e) => {setPath(e.detail.path); currentPage = 4}}></ChoosePath>
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
  {/if}
</main>
