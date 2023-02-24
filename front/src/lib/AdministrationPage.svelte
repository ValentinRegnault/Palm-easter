<script>
    import {httpsCallable} from "firebase/functions"
    import { get, onValue, ref, set, update, child} from "firebase/database";
    import TextInput from "./TextInput.svelte";
    import studentIcon from "../assets/student-icon.png"
    
    export let functions
    export let database
    export let paths
    const requestResetChocolates = httpsCallable(functions, "resetChocolates")
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

    function resetChocolates() {
        requestResetChocolates({studentNumber, secretCode}).then(() => student.chocolatesCount = 0)
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

        <p>Avant de donner ses chocolat au joueurs, demander lui son nom et confirmer qu'il s'agit bien du bon compte (au cas ou quelqu'un viendrait piquer ses chocolats en ayant voler son numéro étudiant, c'est peu probable mais ça fait sérieux de vérifier.)</p>
        <p>Une fois les délicieux chocolats remis au joueur, il faut <bold>reset le compteur !</bold> Pour cela entrez le code secret connu seulement des membres actifs de la palme, et appuyez sur "reset"</p>
        <TextInput label="Code secret" bind:value={secretCode}></TextInput>
        <button on:click={() => resetChocolates()}>
            Reset !
        </button>
    {/if}
</div>