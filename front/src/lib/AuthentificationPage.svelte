<script>
    import { createEventDispatcher } from "svelte";
    import TextInput from "./TextInput.svelte"
    const dispatch = createEventDispatcher();

    let firstName = ""
    let lastName = ""
    let studentNumber = ""  
</script>

<main class="flex flex-col justify-around items-center text-beige">

    <TextInput bind:value={firstName}></TextInput>
    <TextInput bind:value={lastName}></TextInput>
    <TextInput bind:value={studentNumber}></TextInput>

    <button class="bg-beige text-primary-blue px-[2vh] py-[2vh] rounded-full" on:click={() => dispatch("submit", {firstName, lastName, studentNumber})}>
        Connexion !
    </button>
</main>
