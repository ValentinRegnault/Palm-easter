<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher()

    export let state = 0;
    let oldState = 0;

    let content = "Valider !"

    $: {
        state;
        if (oldState == 0 && state == 1) {
            content = "Vérification..."
        }
        else if (oldState == 1 && state == 2) {
            content = "Bonne réponse !"
        }
        else if (oldState == 1 && state == 3) {
            content = "Mauvaise réponse :/"
        }
        else if (state == 0) {
            content = "Valider !"
        }
    }
</script>

<button on:click={() => dispatch("click")}>
    {content}
</button>