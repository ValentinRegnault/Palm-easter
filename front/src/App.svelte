<script>
  import { initializeApp } from "firebase/app";
  import { get, getDatabase, onValue, ref, set, child, connectDatabaseEmulator} from "firebase/database";
  import CreateAccountPage from "./lib/createAccount.svelte"

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
  const db = getDatabase();

  connectDatabaseEmulator(db, "localhost", 9000)

  const dbRef = ref(db)

  let questionsLoaded = false;

  function listenQuestions(firstName, lastName, studentNumber) {
    get(child(dbRef, `users/${studentNumber}`)).then((snapshot) => {
      if (!snapshot.exists()) {
        set(child(dbRef, `users/${studentNumber}`), {firstName, lastName})
      } 
    }).catch((error) => {
      console.error(error);
    });

    onValue(child(dbRef, `users/${studentNumber}/questions`), onQuestionsUpdated)
  }

  function onQuestionsUpdated(snapshot) {
    console.log("updated ! ")
  }
</script>

<main class="">
  {#if !questionsLoaded} 
    <CreateAccountPage on:submit={(e) => listenQuestions(e.detail.firstName, e.detail.lastName, e.detail.studentNumber)}></CreateAccountPage>
  {/if}
</main>
