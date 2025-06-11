<template>
  <!-- Ytre div for spørsmåls-kortet.
       Styling:
       - hvit bakgrunn
       - avrundede hjørner
       - skygge
       - tekst sentrert
       - maks bredde + sentrert horisontalt -->
  <div class="max-w-xl p-6 mx-auto text-center bg-white rounded shadow-md">
    <!-- Viser spørsmålet fra props.questionData -->
    <h2 class="mb-4 text-xl font-bold">{{ questionData.question }}</h2>

    <!-- Viser svaralternativer som knapper.
         - Bruker v-for for å lage én knapp per svar.
         - Når knappen klikkes, kjører vi selectAnswer(answer). -->
    <div class="grid grid-cols-1 gap-4">
      <button
        v-for="(answer, index) in questionData.answers"
        :key="index"
        @click="selectAnswer(answer)"
        class="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        {{ answer }}
      </button>
    </div>
  </div>
</template>

<script setup>
// Importerer useQuizStore fra quiz-storen.
// Vi bruker dette for å kunne oppdatere poengsum når brukeren svarer riktig.
import { useQuizStore } from '@/stores/quiz'

// Definerer props som denne komponenten mottar.
// - questionData: et objekt med spørsmålet, svaralternativer, og riktig svar.
// - onAnswerSelected: en funksjon som foreldrekomponenten gir oss for å si fra at brukeren har svart.
const props = defineProps({
  questionData: Object,
  onAnswerSelected: Function,
})

// Lager en instans av quizStore slik at vi kan kalle incrementScore().
const quizStore = useQuizStore()

// Funksjon som kjøres når brukeren klikker på et svar.
// - Hvis svaret er riktig, oppdaterer vi poengsum i quizStore.
// - Uansett, kaller vi props.onAnswerSelected() for å si fra til foreldrekomponenten at det er svart.
function selectAnswer(answer) {
  if (answer === props.questionData.correctAnswer) {
    quizStore.incrementScore()
  }
  props.onAnswerSelected()
}
</script>

<!-- 
  Sammendrag av hva denne filen gjør:

  QuestionCard.vue er et gjenbrukbart kort som viser ett quiz-spørsmål.

  Den gjør følgende:
  - Viser spørsmålet fra questionData-propen.
  - Viser svaralternativer som knapper.
  - Når brukeren klikker på et svar:
    - Hvis svaret er riktig, øker poengsummen i quizStore.
    - Uansett kaller den onAnswerSelected() for å varsle foreldrekomponenten (f.eks. for å gå til neste spørsmål).

  Teknologier og konsepter brukt:
  - Props for fleksibilitet: denne komponenten kan brukes til alle spørsmål.
  - Programmatisk oppdatering av quizStore (incrementScore).
  - Bruk av callback-funksjon (onAnswerSelected) for kommunikasjon opp til foreldrekomponent.

  Hvor brukes denne komponenten?
  - Kan brukes i en quiz-visning som en del av quiz-flowen.
    (F.eks. som erstatning/utvidelse i QuizView.vue, eller som del av en mer modulær oppbygging.)

  Kommentar:
  QuestionCard er et godt eksempel på en "smart komponent" — den både viser data (spørsmål/svar) og håndterer interaksjon (når brukeren svarer).
-->
