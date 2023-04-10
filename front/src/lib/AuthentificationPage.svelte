<script>
    import { createEventDispatcher } from "svelte";
    import firstNameIcon from "../assets/firstname-icon.svg"
    import lastNameIcon from "../assets/lastname-icon.svg"
    import studentIcon from "../assets/student-icon.svg"
    import TextInput from "./TextInput.svelte"
    import Button from "./Button.svelte";
    const dispatch = createEventDispatcher();

    let firstName = ""
    let lastName = ""
    let studentNumber = "" 
</script>

<div class="flex flex-col justify-around items-center text-beige grow ">

    <TextInput bind:value={firstName} icon={firstNameIcon} label={"Prénom"}></TextInput>
    <TextInput bind:value={lastName} icon={lastNameIcon} label={"Nom"}></TextInput>
    <TextInput bind:value={studentNumber} icon={studentIcon} label={"Ton numéro étudiant"}></TextInput>

    <Button on:click={() => dispatch("submit", {firstName, lastName, studentNumber})}>
        Connexion !
    </Button>
</div>
