<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    let firstName = ""
    let lastName = ""
    let studentNumber = ""
</script>

<main class=" w-full h-full absolute top-0 left-0">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1 flex flex-col">
        <h1>Bienvenue dans l'aventure Palm'easter !</h1>
        <p>Créer votre compte :</p>
        <input type="text" placeholder="Prénom" bind:value={firstName} class="border-black border-[1px]"/>
        <input type="text" placeholder="Nom" bind:value={lastName} class="border-black border-[1px]"/>
        <input type="text" placeholder="Numéro Etudiant" bind:value={studentNumber} class="border-black border-[1px]"/>
        <button on:click={() => dispatch("submit", { firstName, lastName, studentNumber })} class="border-black border-[1px]">
            Go !
        </button>

        <button>
            J'ai déjà un compte
        </button>
    </div>
</main>
