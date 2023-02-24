<script>
    import {createEventDispatcher} from "svelte"
    export let paths;
    const dispatch = createEventDispatcher()
    console.log(paths)
</script>

<main class="flex flex-col justify-around text-beige px-[5%] ">
    <p class="text-sm">Trois parcours possible. Le premier à finir un parcours gagne un gros lot !</p>

    {#each paths as path}
        <button class="bg-beige text-primary-blue px-[2vh] py-[2vh] rounded-full" on:click={() => dispatch("path-choosen", {path})}>
            {path}
        </button>
    {/each}
    
</main>