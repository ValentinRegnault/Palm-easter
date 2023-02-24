<script>
    import { createEventDispatcher } from "svelte";
    import firstNameIcon from "../assets/firstname-icon.png"
    import lastNameIcon from "../assets/lastname-icon.png"
    import studentIcon from "../assets/student-icon.png"
    import TextInput from "./TextInput.svelte"
    const dispatch = createEventDispatcher();

    let firstName = ""
    let lastName = ""
    let studentNumber = ""  
</script>

<div class="flex flex-col justify-around items-center text-beige grow ">

    <TextInput bind:value={firstName} icon={firstNameIcon} label={"Prénom"}></TextInput>
    <TextInput bind:value={lastName} icon={lastNameIcon} label={"Nom"}></TextInput>
    <TextInput bind:value={studentNumber} icon={studentIcon} label={"Ton numéro étudiant"}></TextInput>

    <button class="bg-beige text-primary-blue px-[2vh] py-[2vh] rounded-full" on:click={() => dispatch("submit", {firstName, lastName, studentNumber})}>
        Connexion !
    </button>
</div>
