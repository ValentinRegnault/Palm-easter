<script>
    import {createEventDispatcher} from "svelte"
    const dispatch = createEventDispatcher()
</script>

<main class="flex flex-col justify-around text-beige px-[5%] ">
    <p class="text-sm">Trois parcours possible. Le premier à finir un parcours gagne un gros lot !</p>

    <button class="bg-beige text-primary-blue px-[2vh] py-[2vh] rounded-full" on:click={() => dispatch("path-choosen", {path: 0})}>
        Parcours 1
    </button>
    <button class="bg-beige text-primary-blue px-[2vh] py-[2vh] rounded-full" on:click={() => dispatch("path-choosen", {path: 1})}>
        Parcours 2
    </button>
    <button class="bg-beige text-primary-blue px-[2vh] py-[2vh] rounded-full" on:click={() => dispatch("path-choosen", {path: 2})}>
        Parcours 2
    </button>
</main>