<script>
    import {httpsCallable} from "firebase/functions"
    import { get, onValue, ref, set, update, child} from "firebase/database";
    import TextInput from "./TextInput.svelte";
    import studentIcon from "../assets/student-icon.png"
    
    export let functions
    export let database
    export let paths
    const requestResetPlayerChocolates = httpsCallable(functions, "resetPlayerChocolates")
    const dbRef = ref(database)
    let secretCode
    let studentNumber

    let student;



    async function inspect () {
        let allUsers = (await get(child(dbRef,"users"))).val()
        let inspectedUser = allUsers[studentNumber];
        let ranks = {}
        for (const path of paths) {
            if (!inspectedUser.endedPath || !inspectedUser.endedPath[path]) {
                ranks[path] = "Non terminé" 
                continue
            }

            let rank = Object.values(allUsers).reduce((fasterStudentCount, student) => {
                if (student.endedPath && student.endedPath[path] < inspectedUser[path]) {
                    return fasterStudentCount + 1
                } else return fasterStudentCount
            }, 0)
            ranks[path] = rank
        }

        student = {
            firstName: inspectedUser.firstName,
            lastName: inspectedUser.lastName,
            chocolatesCount: inspectedUser.chocolatesCount,
            ranks
        }
    }
</script>

<div class="flex flex-col justify-around grow">
    {#if !student}
        <p>Bienvenue sur la page d'administration, pour inspecter un joueurs, entrez son numéro étudiant :</p>
        <TextInput bind:value={studentNumber} label="Numéro étudiant" icon={studentIcon}></TextInput> 
        <button on:click={() => inspect()}>Inspecter</button>    
    {:else}
        <h1>{student.firstName + " " + student.lastName}</h1>
        <p>Nombre de chocolats : {student.chocolatesCount}</p>
        <p>rangs : </p>
        {#each paths as path} 
            <p>{path} : {typeof student.ranks[path] == "number" ? student.ranks[path] + 1 + " ème" : student.ranks[path]}</p>
        {/each}
    {/if}
</div>