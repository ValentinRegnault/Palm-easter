<script>
    export let label
    export let value;
    export let valueUnformatted = ""
    $: { 
        value = valueUnformatted.toLowerCase()
    }
    

    export let icon;
    export let type = "text"
</script>

<div class="w-[250px] h-[50px] sm:w-[400px] sm:h-[70px] relative text-primary-blue drop-shadow-neubrutalism">
    <img src={icon} class="z-10 absolute top-1/2 left-[1vh] -translate-y-1/2 w-[4vh]" alt="">
    {#if type == "text"}
        <input placeholder="" type="text" class="rounded-[1vh] border-primary-blue bg-beige absolute top-0 left-0 w-full h-full px-[6vh] color-primary-blue outline-none cool-border-bottom peer" bind:value={valueUnformatted}>
    {:else if type == "number"}
        <input placeholder="" type="number" class="rounded-[1vh] border-primary-blue bg-beige absolute top-0 left-0 w-full h-full px-[6vh] color-primary-blue outline-none cool-border-bottom peer" bind:value={valueUnformatted}>
    {/if}
    <p class="absolute z-10 scale-75 text-[white] top-4 left-[6vh] origin-[0] -translate-y-4 transition-transform ease-in-out pointer-events-none
    peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0  
    peer-focus:scale-75 peer-focus:-translate-y-4 " >{label}</p>
</div>

<style>
    .cool-border-bottom {
        transition: border-bottom-width 150ms cubic-bezier(0.4, 0, 0.2, 1);
        border-bottom-width: 0;
    }

    .cool-border-bottom:focus {
        border-bottom-width: 4px;
        border-style: solid;
        border-image: linear-gradient(90deg, 
            #CB92DF
            0%,
            #EC94BA
            30%,
            #9EBDDA
            40%,
            #8BC7E1
            50%,
            #A7EB8D
            80%,
            #F2CF82
            95%
        ) 1;
    }
</style>


