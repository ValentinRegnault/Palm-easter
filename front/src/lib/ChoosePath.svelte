<script>
    import {createEventDispatcher} from "svelte"
    export let paths;
    const dispatch = createEventDispatcher()
</script>

<main class="flex flex-col justify-around text-beige px-[5%] items-center">
    <p class="text-sm text-primary-blue  w-[80%]">
        Trois parcours possible, trois thèmes de questions. Le premier à finir un parcours gagne un gros lot !<br>
        - <u>Informatique</u>, c'est le parcours le plus dur, avec des questions sur les langages de programmation, les algorithmes, les bases de données, la cybersécuritée...
        - <u>Pop culture</u>, c'est de culture geek, des questions sur des films, des jeux vidéos, des musiques, Internet...<br>
        - Et <u>Istic/Beaulieu</u> c'est des questions sur l'ISTIC, sur le campus, sur les bâtiments, sur les profs, sur les assos...<br>
    </p>

    {#each paths as path}
        <button class="bg-beige text-primary-blue px-[2vh] py-[2vh] rounded-full my-[3%] drop-shadow-neubrutalism w-[90%]" on:click={() => dispatch("path-choosen", {path})}>
            {path}
        </button>
    {/each}
    
</main>