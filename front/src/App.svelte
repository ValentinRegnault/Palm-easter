<script>
  import { initializeApp } from "firebase/app";
  import { getStorage, connectStorageEmulator, ref as storageRef, getBlob } from "firebase/storage"
  import { getFunctions, httpsCallable, connectFunctionsEmulator } from 'firebase/functions';
  import { get, getDatabase, onValue, ref, set, update, child, connectDatabaseEmulator, onDisconnect} from "firebase/database";
  import AuthentificationPage from "./lib/AuthentificationPage.svelte"
  import SingleChoice from "./lib/SingleChoice.svelte";
  import MultipleChoice from "./lib/MultipleChoice.svelte";
  import TextInput from "./lib/TextInput.svelte";
  import ChoosePath from "./lib/ChoosePath.svelte";
  import Home from "./lib/Home.svelte"
  import CheckAnswerButton from "./lib/checkAnswerButton.svelte";
  import AdministrationPage from "./lib/AdministrationPage.svelte";
  import Header from "./lib/Header.svelte";
  import Congratulation from "./lib/Congratulation.svelte";
  import {eraseCookie, getCookie, setCookie} from "./lib/cookies.js"
  import {COOLDOWN_MILISECONDS} from "./lib/constants"

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
  const functions = getFunctions(firebaseApp);
  const storageInstance = getStorage(firebaseApp);
  const requestValidateQuestion = httpsCallable(functions, "validateQuestion");
  const db = getDatabase();

  if(window.location.hostname == "localhost" || window.location.hostname == "127.0.0.1") {
    console.log("Running in emulator !");
    connectDatabaseEmulator(db, "localhost", 9000)
    connectFunctionsEmulator(functions, "localhost", 5001)
    connectStorageEmulator(storageInstance, "localhost", 9199)
  }

  let currentPage = 0;

  const dbRef = ref(db)
  let paths; 
  let studentNumber;
  let firstName;
  let lastName;
  let currentQuestion;
  let studentAnswer;
  let checkAnswerButtonState = 0;
  let currentPath;
  let chocolatesCount

  const QUESTIONS_COUNT = 7
  let currentQuestionIndex = 0;

  get(child(dbRef, "paths")).then(ps => {
    paths = ps.val()
  })
  

  if (getCookie("studentNumber")) {
    studentNumber = getCookie("studentNumber")
    listenQuestions()
    currentPage = 4
  }


  function onUserConnect(e) {
    studentNumber = e.detail.studentNumber
    firstName = e.detail.firstName
    lastName = e.detail.lastName

    if(firstName.toLowerCase() == "admin") {
      currentPage = "admin"
      return
    }

    if (studentNumber.length != 8) {
      alert("Le numéro étudiant ne correspond à aucun étudiant !")
      return  
    }
    else if (firstName.length == 0 || lastName.length == 0) {
      alert("Le nom ou le prénom ne sont pas valides !")
      return
    }

    setCookie("studentNumber", studentNumber, 7)
    listenQuestions()
  }

  function listenQuestions() {
    get(child(dbRef, `users/${studentNumber}`)).then((snapshot) => {
      if (!snapshot.exists()) {
        currentPage = 3
      } 
      else {
        currentPage = 4;
        onValue(child(dbRef, `users/${studentNumber}/questions`), onQuestionsUpdated)
        get(child(dbRef, `users/${studentNumber}/currentPath`)).then(snap => {
          currentPath = snap.val()
        })
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  function setPath(path) {
    currentPath = path
    update(child(dbRef, `users/${studentNumber}`), {firstName, lastName, currentPath: path})
    .then(() => currentPage = 4)
    .catch(e => {
      alert("Erreur : vous avez mal entrée votre numéro étudiant, où votre nom/prénom. Veuillez réessayer. Code d'erreur : " + e)
      currentPage = 1
      eraseCookie("studentNumber")
    }) 
    
    onValue(child(dbRef, `users/${studentNumber}/questions`), onQuestionsUpdated)
  }

  async function getCurrentQuestionAndIndex (userQuestions) {
    const questionLevels = await Promise.all(
      Object.keys(userQuestions)
      .map(async (key) => {
        return [
          key, 
          (await get(child(dbRef, `questions/${key}/level`))).val()
        ]
      })
    )

    const sortedUnanwseredQuestions = questionLevels
      .filter(([key, level]) => !userQuestions[key].validated)
      .sort(([key1, level1], [key2, level2]) => level1 - level2)

    return [
      sortedUnanwseredQuestions[0], 
      QUESTIONS_COUNT - sortedUnanwseredQuestions.length
    ]
  }

  
  async function onQuestionsUpdated(snapshot) {
    if (!snapshot.exists()) return;
    let questions = snapshot.val();
    
    let [firstUnansweredQuestion, index] = await getCurrentQuestionAndIndex(questions)
    currentQuestionIndex = index

    let chocoSnapshot = await get(child(dbRef, `users/${studentNumber}/chocolatesCount`))
    chocolatesCount = chocoSnapshot.exists() ? chocoSnapshot.val() : 0


    if(!firstUnansweredQuestion) {
      currentPage = 5
      return
    }
  
    Promise.all([
      get(child(dbRef, "questions/" + firstUnansweredQuestion[0] + "/questionText")),
      get(child(dbRef, "questions/" + firstUnansweredQuestion[0] + "/questionType")),
      get(child(dbRef, "questions/" + firstUnansweredQuestion[0] + "/choices")),
      get(child(dbRef, "questions/" + firstUnansweredQuestion[0] + "/image")),
      get(child(dbRef, "users/" + studentNumber + "/questions/" + firstUnansweredQuestion[0] + "/lastTryDate")),
    ])
    .then((snapshots) => {
      currentQuestion = {
        questionId: firstUnansweredQuestion[0],
        questionText: snapshots[0].val(),
        questionType: snapshots[1].val(),
        choices: snapshots[2].val(),
        image: snapshots[3].val(),
        lastTryDate: snapshots[4].exists() ? snapshots[4].val() : 0 
      }

      if (currentQuestion.lastTryDate + COOLDOWN_MILISECONDS > Date.now()) {
        checkAnswerButtonState = 3
      }
    })
    .catch(console.error)
  }

  async function checkAnswer() {
    checkAnswerButtonState = 1

    if (currentQuestion.lastTryDate + COOLDOWN_MILISECONDS > Date.now()) {
      alert("Hola jeune aventurier.e ! Pas si vite ! Tu t'es trompé.e, tu dois attendre 1 heure avant de réessayer.")
    }

    await new Promise((res,rej) => {
      setTimeout(() => {
        res()
      }, 1000)
    })

    requestValidateQuestion({
      questionId: currentQuestion.questionId,
      studentNumber,
      studentAnswer,
      path: currentPath
    })
    .then((response) => {
      studentAnswer = ""
      if(response.data.correct) {
        studentAnswer = ""
        console.log("correct answer !")
        checkAnswerButtonState = 2
        setTimeout(() => {
          checkAnswerButtonState = 0
        },1500)
      }
      else {
        checkAnswerButtonState = 3  
      }
    })
    .catch(err => {
      console.log(err)
      checkAnswerButtonState = 3
    })
  }

  function onUserDisconnect() {
    eraseCookie("studentNumber")
    currentPage = 1
    checkAnswerButtonState = 0
  }
</script>

<main class="font-francois-one flex flex-col justify-around min-h-[100vh] items-center">
  <Header
    currentPage={currentPage}
    currentQuestionIndex={currentQuestionIndex}
    questionsCount={QUESTIONS_COUNT}
    chocolatesCount={chocolatesCount}
  ></Header>
  <div class="flex flex-col w-full max-w-[450px] h-full grow">
    {#if window.location.pathname == "/admin" || currentPage == "admin"}
      <AdministrationPage functions={functions} database={db} paths={paths}></AdministrationPage>
    {:else if currentPage == 0} 
      <Home on:next={() => currentPage = 1}></Home>
    {:else if currentPage == 1} 
      <AuthentificationPage on:submit={(e) => onUserConnect(e)}></AuthentificationPage> 
    {:else if currentPage == 3}
      <ChoosePath paths={paths} on:path-choosen={(e) => {setPath(e.detail.path)}}></ChoosePath>
    {:else if currentPage == 4 && currentQuestion}
      <div class="p-[5%] flex flex-col justify-between grow items-center">
        <h1 class="text-primary-blue">{currentQuestion.questionText}</h1>
        {#await getBlob(storageRef(storageInstance, currentQuestion.image))}
          loading image...
        {:then imageBlob}
          <img src={URL.createObjectURL(imageBlob)} class="min-w-0 h-[30vh] mb-[5%] drop-shadow-neubrutalism" alt="question">
        {:catch error}
          Impossible de charger l'image :/ {error.message}
        {/await}
        {#if currentQuestion.questionType == "multipleChoices"}
          <MultipleChoice bind:value={studentAnswer} choices={currentQuestion.choices}></MultipleChoice>
        {:else if currentQuestion.questionType == "singleChoice"}
          <SingleChoice bind:value={studentAnswer} choices={currentQuestion.choices} label="Votre réponse..."></SingleChoice>
        {:else if currentQuestion.questionType == "textAnswer"}
          <TextInput bind:value={studentAnswer} label="Votre réponse..."></TextInput>
        {/if}
        <div class="my-[10%]">
          <CheckAnswerButton on:click={() => checkAnswer()} state={checkAnswerButtonState} currentQuestionLastTryDate={currentQuestion.lastTryDate}></CheckAnswerButton>
        </div>
        <button on:click={() => onUserDisconnect()}>Se déconnecter</button>
      </div>
    {:else if currentPage == 5} 
      <Congratulation 
        chocolatesCount={chocolatesCount}
        on:disconnect={() => onUserDisconnect()}
      ></Congratulation>
    {/if} 
  </div>
</main>


