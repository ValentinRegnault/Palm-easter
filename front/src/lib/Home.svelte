<script>
    import {createEventDispatcher} from "svelte"
    const dispatch = createEventDispatcher()
</script>

<main class="flex flex-col justify-around text-beige px-[5%] ">
    <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt molestias, excepturi, ipsa sapiente aliquam minus reiciendis reprehenderit quae aliquid veniam cumque </p>

    <button class="bg-beige text-primary-blue px-[2vh] py-[2vh] rounded-full" on:click={() => dispatch("next")}>
        Je participe !
    </button>
</main>