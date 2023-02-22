<script>
    export let label
    export let value;
</script>

<div class="w-[90vw] h-[10vh] relative text-primary-blue drop-shadow-neubrutalism">
    <p>{label}</p>
    <input type="text" class="rounded-[1vh] border-primary-blue bg-beige absolute top-0 left-0 w-full h-full px-[5vh] color-primary-blue" bind:value={value}>
</div>
