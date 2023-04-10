<script>
    import {slide} from "svelte/transition"
    export let choices;
    export let value;
    let choiceSelection = choices.map(() => false);
    $: {
        choiceSelection;
        value = choices.filter((_, index) => choiceSelection[index]);
        console.log(value)
    }
</script>

<div 
    class="w-[250px] sm:w-[400px] py-[2vh] relative text-primary-blue drop-shadow-neubrutalism flex flex-col bg-beige justify-center text-primary-blue px-[1vw]"
>
    
    {#each choices as choice, index}
        <p 
            transition:slide={{duration: 200}}
            class="first:border-0 grow-0 border-t-[1px] border-primary-blue hover:text-white hover:bg-primary-blue cursor-pointer"
        >
            <input type="checkbox" bind:checked={choiceSelection[index]} on:change={() => choiceSelection = choiceSelection}> {choice}
        </p>
    {/each}
</div>
