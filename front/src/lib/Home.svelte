<script>
    import {createEventDispatcher} from "svelte"
    import Button from "./Button.svelte";
    const dispatch = createEventDispatcher()
</script>

<main class="flex flex-col justify-center text-beige p-[5%] items-center grow">
    <p class="text-sm text-primary-blue mb-[3%] w-[90%]">
        Bienvenue dans l'aventure Palm'easter ! Une chasse aux énigmes de Pâque, avec des chocolats et des gros lots à gagner !
        Certaines énigmes te feront arpenter l'istic, d'autre te feront réfléchir intensemment, et d'autres encore necessiteront des recherches avancées !
        Tu as jusqu'au vendredi 14 avril pour résoudre le plus d'énigmes possible ! 
    </p>

    <Button on:click={() => dispatch("next")}>Je participe !</Button>
</main>