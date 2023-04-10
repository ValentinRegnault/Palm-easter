<script>
    import {createEventDispatcher} from "svelte"
    const dispatch = createEventDispatcher()
</script>

<button 
    class="bg-beige rounded-full drop-shadow-neubrutalism py-[2vh] px-[5vw] text-primary-blue w-[90%]"
    on:click={() => dispatch("click")}
>
    <slot></slot>
</button>