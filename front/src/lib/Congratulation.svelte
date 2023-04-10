<script>
    import {createEventDispatcher} from "svelte"

    const dispatch = createEventDispatcher()
    export let chocolatesCount
</script>

<div class="flex flex-col justify-between h-full grow py-[5%]">
    <h1>Félicitation ! Vous avez terminer votre parcours ! Vous pouvez passer à la Palme récupérer vos récompenses et découvrir si vous êtes le premier à avoir terminer ce parcours !</h1>
    <h2>Vous avez gagné {chocolatesCount} chocolats !</h2>
    <button on:click={() => dispatch("disconnect")} class="text-primary-blue">Se déconnecter</button>
</div>