<script>
    import logoPalmeaster from "../assets/logo-palmeaster.png"
    import oeuf from "../assets/oeuf.svg"
    export let currentPage;
    export let currentQuestionIndex;
    export let questionsCount;
    export let chocolatesCount;
</script>

<div class={(currentPage == 4 ? "mini-header" : "big-header") + " header"}>
    <img 
        class="shrink min-w-0 min-h-0 h-[100%]"
        src={logoPalmeaster} 
        alt=""
    > 
    <h1 class="text-beige px-[5%]">
        {#if currentPage == 0}
        Bienvenue dans l'aventure Palm'easter !
        {:else if currentPage == 1}
        Qui es tu ?
        {:else if currentPage == 3}
        Choisit ton parcours !
        {:else if currentPage == 4}
        Question {currentQuestionIndex + 1 } / {questionsCount}
        {:else if currentPage == 5}
        Félicitation !
        {/if}
    </h1>
    {#if currentPage == 4}
        <div class="h-full relative flex">
            <p class="text-md text-primary-blue absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{chocolatesCount}</p>
            <img src={oeuf} alt="chocolats" class="shrink min-w-0 min-h-0 h-[75%] self-center">
        </div>
    {/if}
</div>


<style>
    .header {
      transition: height 0.2s;
      display: flex;
      background-color: #494EB0;
      border-bottom-width: 4px;
      border-style: solid;
      width: 100%;
      /* border-image: linear-gradient(90deg, #D667DC 0%, #EC96B3 6.25%, #E7AD43 13.54%, #A8ED84 23.44%, #E13F85 47.92%, #DAA813 72.92%, #AC4D1B 100%) 1; */
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
  
    .big-header {
      height: 40vh;
      flex-direction: column;
      padding-bottom: 5%;
      align-items: center;
    }
    .big-header > h1 {
        font-size: 1.25rem;
    }
  
    .mini-header {
      height: 10vh;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 2% 0 0%;
      align-items: center;
    }
</style>