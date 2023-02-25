import { describe, it, expect, beforeAll } from "vitest";
import { get, getDatabase, onValue, ref, set, update, child, connectDatabaseEmulator} from "firebase/database";

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

describe("The database for Palm'easter", () => {
    const firebaseApp = initializeApp(firebaseConfig);
    const db = getDatabase();
    const dbRef = ref(db);

    let questionId;

    if(window.location.hostname == "localhost" || window.location.hostname == "127.0.0.1") {
        connectDatabaseEmulator(db, "localhost", 9000)
    }

    beforeAll(() => {
        return Promise((res, _rej) => {
            await set(child(db, "users/1"), {
                firstName: "Test",
                lastName: "Person",
                currentPath: "Parcours 2"
            })
    
            let firstCall = true
            onValue(child(dbRef, "users/1"), snap => {
                if(firstCall) firstCall = false;
                else {
                    questionId = snap.val().questions[0];
                    res();
                }
            })
        })
    })

    it("Do math stuff", () => expect(2 + 2).toBe(4))

    it("Allows to create a new user, with a valid path", async () => {
        expect(await set(child(db, "users/23111989"), {
            firstName: "Valentin",
            lastName: "Regnault",
            currentPath: "Parcours 1"
        }))
        .not.toThrow();    
    })

    it("Forbid to create a new user, with an invalid path", async () => {
        expect(await set(child(db, "users/23111989"), {
            firstName: "Valentin",
            lastName: "Regnault",
            currentPath: "Invalid path"
        }))
        .toThrow();    
    })

    it("Forbid to modify a user after it has been created", async () => {
        expect(await set(child(db, "users/1"), {
            firstName: "Test",
            lastName: "Person",
            currentPath: "Parcours 2"
        }))
        .toThrow();    
    })
    
    it("Forbid to create a new user with any other things that firstName, lastName and currentPath", async () => {
        expect(await set(child(db, "users/23111989"), {
            firstName: "Valentin",
            lastName: "Regnault",
            currentPath: "Parcours 1",
            endedPaths: [1]
        }))
        .toThrow();   
        
        expect(await set(child(db, "users/23111989"), {
            firstName: "Valentin",
            lastName: "Regnault",
            currentPath: "Parcours 1",
            prout: 1
        }))
        .toThrow();    
    })

    it("Forbid to create a new user without firstName, lastName or currentPath", async () => {
        expect(await set(child(db, "users/23111989"), {
            firstName: "Valentin",
            currentPath: "Parcours 1",
        }))
        .toThrow();   
        
        expect(await set(child(db, "users/23111989"), {
            firstName: "Valentin",
            lastName: "Regnault",
        }))
        .toThrow();   
        
        expect(await set(child(db, "users/23111989"), {
            lastName: "Regnault",
            currentPath: "Parcours 1"
        }))
        .toThrow();    

        expect(await set(child(db, "users/23111989"), {
        }))
        .toThrow();
    })

    it("Allows to read everything about a user", async () => {
        expect(await get(child(db, "users/1")))
        .not.toThrow()
    })

    it("Forbid to read answer to questions", async () => {
        expect(await get(child(dbRef, "questions/" + questionId)))
        .toThrow()

        expect(await get(child(dbRef, "questions/" + questionId + "/answer")))
        .toThrow()
    })

    it("Allows to read other fields of questions", async () => {
        expect(await get(child(dbRef, "questions/" + questionId + "/questionText")))
        .not.toThrow();

        expect(await get(child(dbRef, "questions/" + questionId + "/questionType")))
        .not.toThrow();

        expect(await get(child(dbRef, "questions/" + questionId + "/choices")))
        .not.toThrow();

        expect(await get(child(dbRef, "questions/" + questionId + "/level")))
        .not.toThrow();
    })

    it("Forbid to write questions", async () => {
        expect(await set(child(dbRef, "questions/" + questionId + "/questionText", "coucou")))
        .toThrow();
    })

    it("Forbid to write questions", async () => {
        expect(await set(child(dbRef, "questions/" + questionId + "/questionText", "coucou")))
        .toThrow();
    })
})