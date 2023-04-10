<script>
    import { createEventDispatcher } from "svelte";
    import {COOLDOWN_MILISECONDS} from "./constants"
    const dispatch = createEventDispatcher()

    const colorsByState = [
        "#F1BEB3",
        "#e0e0e0",
        "#A8ED84 ",
        "#f25500",
    ]

    export let state
    let oldState = 0;
    export let currentQuestionLastTryDate

    let content = "Valider !"

    function formatHour(hour, minutes) {
        let hourString = hour.toString()
        let minutesString = minutes.toString()
        if (hour < 10) {
            hourString = "0" + hourString
        }
        if (minutes < 10) {
            minutesString = "0" + minutesString
        }
        return hourString + "h" + minutesString
    }

    $: {
        state;
        if (state == 1) {
            content = "Vérification..."
        }
        else if (state == 2) {
            content = "Bonne réponse !"
        }
        else if (state == 3) {
            let date = new Date(currentQuestionLastTryDate + COOLDOWN_MILISECONDS)
            content = "Mauvais réponse ! Prochain essai : " + formatHour(date.getHours(), date.getMinutes());
        }
        else if (state == 0) {
            content = "Valider !"
        }
        oldState = state
    }
</script>

<button 
    class="drop-shadow-neubrutalism rounded-full px-[5vw] py-[2vh]"
    style:background-color={colorsByState[state]}
    on:click={() => dispatch("click")}
>
    {content}
</button>

<style>
    test {
        background-color: #f25500;
    }
</style>