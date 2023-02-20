<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();

    let firstName;
    let lastName;
</script>

<main class=" w-full h-full absolute top-0 left-0">
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1 flex flex-col">
        <h1>Bienvenue dans l'aventure Palm'easter !</h1>
        <input type="text" placeholder="Prénom" bind:value={firstName} class="border-black border-[1px]"/>
        <input type="text" placeholder="Nom" bind:value={lastName} class="border-black border-[1px]"/>
        <button on:click={() => dispatch("submit", { firstName, lastName })} class="border-black border-[1px]">
            Go !
        </button>
    </div>
</main>
