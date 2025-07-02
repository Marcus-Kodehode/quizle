<template>
  <!-- Ytre beholder-div for quiz-siden.
       Bruker flexbox for å sentrere innholdet og gir en bakgrunnsgradient -->
  <div
    class="flex flex-col items-center justify-center min-h-screen p-8 space-y-8 text-white bg-gradient-to-r from-purple-500 to-pink-500"
  >
    <!-- Fremdriftstekst: Vises kun hvis vi har lastet inn spørsmål -->
    <div v-if="questions.length > 0" class="text-lg font-semibold">
      Spørsmål {{ currentQuestionIndex + 1 }} / {{ questions.length }}
    </div>

    <!-- Spørsmål og svar: vises hvis quizen ikke er ferdig -->
    <div
      v-if="!quizFinished && questions.length > 0"
      class="flex flex-col items-center w-full max-w-xl p-8 space-y-6 text-black bg-white rounded-lg shadow-lg"
    >
      <!-- Spørsmålsteksten -->
      <h2 class="text-2xl font-bold text-center">
        {{ questions[currentQuestionIndex].question }}
      </h2>

      <!-- Svaralternativer som knapper -->
      <div class="grid w-full grid-cols-1 gap-4">
        <button
          v-for="answer in questions[currentQuestionIndex].answers"
          :key="answer"
          @click="handleAnswer(answer)"
          class="px-6 py-3 text-white transition bg-blue-500 rounded hover:bg-blue-600"
        >
          {{ answer }}
        </button>
      </div>
    </div>

    <!-- Resultatvisning: vises når quizen er ferdig -->
    <div v-else-if="quizFinished" class="space-y-4 text-center">
      <h2 class="text-3xl font-bold">Gratulerer! 🎉</h2>
      <p>Du er ferdig med quizen.</p>
      <RouterLink
        to="/result"
        class="inline-block px-6 py-3 mt-4 text-white bg-green-500 rounded hover:bg-green-600"
      >
        Se resultatet ditt ⭐
      </RouterLink>
    </div>

    <!-- Lastemelding: vises mens spørsmålene lastes inn -->
    <div v-else class="text-xl">Laster spørsmål... ⏳</div>
  </div>
</template>

<script setup>
/* 
  Importerer nødvendige funksjoner fra Vue:
  - ref: for å lage reaktive variabler (f.eks. currentQuestionIndex)
  - onMounted: for å kjøre kode når komponenten er ferdig "montert" (vises på skjermen)
*/
import { ref, onMounted } from 'vue'

/*
  Importerer useRoute fra vue-router, slik at vi kan lese URL-parametere (f.eks. quiz-id).
*/
import { useRoute } from 'vue-router'

/*
  Importerer useQuizStore fra vår Pinia store (quiz store), som holder på poengsum og antall spørsmål.
*/
import { useQuizStore } from '@/stores/quiz'

/*
  Lager instanser av route (for å hente parametere) og quizStore (for å bruke quiz-funksjoner).
*/
const route = useRoute()
const quizStore = useQuizStore()

/*
  Lager reaktive variabler som styrer tilstanden i quizen:
  - questions: spørsmålene vi henter fra fil
  - currentQuestionIndex: hvilket spørsmål brukeren er på nå
  - quizFinished: true hvis quizen er ferdig
*/
const questions = ref([])
const currentQuestionIndex = ref(0)
const quizFinished = ref(false)

/*
  Funksjon for å laste inn quiz-data basert på quiz-id fra URL.
  - Bruker dynamisk import av en .json-fil fra "data"-mappen.
  - Når data er lastet inn, lagrer vi spørsmålene og nullstiller quiz-state i store.
*/
async function loadQuizData() {
  const quizId = route.params.id

  try {
    const data = await import(`@/data/${quizId}.json`)
    questions.value = data.default

    quizStore.setCurrentQuizId(quizId) // 👈 sett quizId FØR reset
    quizStore.resetQuiz()
    quizStore.setTotalQuestions(questions.value.length)
  } catch (error) {
    console.error('❌ Kunne ikke laste quiz-data:', error)
  }
}

/*
  Funksjon som håndterer når brukeren klikker på et svar.
  - Sjekker om svaret er riktig, og oppdaterer poengsum hvis det er riktig.
  - Går videre til neste spørsmål, eller avslutter quizen hvis vi er på siste spørsmål.
*/
function handleAnswer(selectedAnswer) {
  const correctAnswer = questions.value[currentQuestionIndex.value].correctAnswer
  if (selectedAnswer === correctAnswer) {
    quizStore.incrementScore()
  }

  if (currentQuestionIndex.value + 1 < questions.value.length) {
    currentQuestionIndex.value++
  } else {
    quizFinished.value = true
  }
}

/*
  onMounted: kjøres når komponenten vises første gang.
  - Vi kaller loadQuizData for å hente inn spørsmålene.
*/
onMounted(() => {
  loadQuizData()
  quizStore.setCurrentQuizId(route.params.id)
})
</script>

<!-- 
  Sammendrag av hva denne filen gjør:

  QuizView.vue er selve quiz-siden i appen.

  Den gjør følgende:
  - Leser inn quiz-id fra URL, og laster spørsmål fra en tilhørende .json-fil.
  - Viser ett spørsmål om gangen, med svaralternativer som knapper.
  - Holder styr på hvilket spørsmål brukeren er på.
  - Sjekker om svaret er riktig, og oppdaterer poengsummen via quizStore.
  - Når alle spørsmål er besvart, vises en "Gratulerer"-melding med lenke til resultat-siden.
  - Viser også "Laster spørsmål..." mens dataene lastes inn.

  Viktige teknologier som brukes her:
  - Vue Router (for å hente quiz-id fra URL)
  - Pinia store (quizStore for poengsum og state)
  - Reaktive variabler (ref) for å styre UI og tilstand.
  - Dynamisk import av quiz-data fra json-filer.

-->
