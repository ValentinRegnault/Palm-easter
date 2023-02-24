<script>
    import TextInput from "./TextInput.svelte";
    import {httpsCallable} from "firebase/functions"
    export let functions
    const requestInspectPlayer = httpsCallable(functions, "inpectPlayer")
    const requestResetPlayerChocolates = httpsCallable(functions, "resetPlayerChocolates")

    let secretCode
    let studentNumber

    function inspect () {
        requestInspectPlayer({studentNumber, secretCode}).then()
    }
</script>

<div>
    Bienvenue sur la page d'administration. Inspecter un joueur :
    <TextInput bind:value={studentNumber} label="Numéro étudiant"></TextInput> 
    <TextInput bind:value={secretCode} label="Code secret"></TextInput> 
    <button on:click={() => inspect()}>Inspecter</button>
</div>