<script>
    import {slide} from "svelte/transition"
    export let choices;
    export let value;
    export let label;
    let selectionModalOpened = false
</script>

<div 
    class="w-[250px] sm:w-[400px] py-[2vh] relative text-primary-blue drop-shadow-neubrutalism flex flex-col bg-beige justify-center text-primary-blue px-[1vw]"
    on:click={() => selectionModalOpened = !selectionModalOpened}
    on:keydown={() => selectionModalOpened = !selectionModalOpened}
>
    
    <p class="cursor-pointer">
        {value || "Choisir"}
    </p>
    {#if selectionModalOpened}
        {#each choices as choice}
            <p 
                on:click|stopPropagation={() => {
                    value = choice.toLowerCase();
                    selectionModalOpened = false;
                }}
                on:keydown|stopPropagation={() => {
                    value = choice.toLowerCase();
                    selectionModalOpened = false;
                }}
                transition:slide={{duration: 200}}
                class="grow-0 border-t-[1px] border-primary-blue hover:text-white hover:bg-primary-blue cursor-pointer"
            >
                {choice}
            </p>
        {/each}
    {/if}
</div>
