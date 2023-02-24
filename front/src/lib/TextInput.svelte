<script>
    export let label
    export let value;
    export let icon;
</script>

<div class="w-[90vw] h-[10vh] relative text-primary-blue drop-shadow-neubrutalism">
    <img src={icon} class="z-10 absolute top-1/2 left-[1vh] -translate-y-1/2 w-[4vh]" alt="">
    <input placeholder="" type="text" class="rounded-[1vh] border-primary-blue bg-beige absolute top-0 left-0 w-full h-full px-[6vh] color-primary-blue outline-none cool-border-bottom peer" bind:value={value}>
    <p class="absolute z-10 scale-75 text-[white] top-4 left-[6vh] origin-[0] -translate-y-4 transition-transform ease-in-out pointer-events-none
    peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-0  
    peer-focus:scale-75 peer-focus:-translate-y-4 " >{label}</p>
</div>

<style>
    .cool-border-bottom:focus {
        border-bottom-width: 4px;
        border-style: solid;
        border-image: linear-gradient(90deg, #D667DC 0%, #EC96B3 6.25%, #E7AD43 13.54%, #A8ED84 23.44%, #E13F85 47.92%, #DAA813 72.92%, #AC4D1B 100%) 1;
    }
</style>


