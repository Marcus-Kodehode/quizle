<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen p-8 space-y-8 text-white bg-gradient-to-r from-purple-500 to-pink-500"
  >
    <!-- Timer med ikon -->
    <div v-if="!quizFinished" class="flex items-center space-x-2 text-6xl font-bold">
      <span>{{ timer }}</span>
      <span>🕑</span>
    </div>

    <!-- Fremdrift -->
    <div v-if="!quizFinished && questions.length > 0" class="text-xl">
      Spørsmål {{ currentQuestionIndex + 1 }} / {{ questions.length }}
    </div>

    <!-- Spørsmål og svar -->
    <div
      v-if="questions.length > 0 && !quizFinished"
      class="flex flex-col items-center w-full max-w-xl p-8 space-y-6 text-black bg-white rounded-lg shadow-lg"
    >
      <h2 class="text-2xl font-bold text-center">
        {{ questions[currentQuestionIndex].question }}
      </h2>

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

    <!-- Resultat -->
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
  </div>
</template>

<script setup>
// Importer nødvendige funksjoner og hooks
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useQuizStore } from '@/stores/quiz'

const quizStore = useQuizStore()
const route = useRoute()

// Reactive variabler for spørsmål, fremdrift og timer
const questions = ref([])
const currentQuestionIndex = ref(0)
const quizFinished = ref(false)
const timer = ref(20)
let timerInterval = null

// Funksjon for å laste inn quiz-data fra JSON basert på quizId i URL
async function loadQuizData() {
  const quizId = route.params.id
  try {
    const data = await import(`@/data/${quizId}.json`)
    questions.value = data.default
    quizStore.resetQuiz()
    quizStore.setTotalQuestions(questions.value.length)
    startTimer()
  } catch (error) {
    console.error('Kunne ikke laste quiz-data:', error)
  }
}

// Funksjon for å starte nedtellingstimer (10 sekunder per spørsmål)
function startTimer() {
  timer.value = 20
  timerInterval = setInterval(() => {
    timer.value--
    if (timer.value <= 0) {
      clearInterval(timerInterval)
      nextQuestion()
    }
  }, 1000)
}

// Funksjon som håndterer når brukeren trykker på et svar
function handleAnswer(selectedAnswer) {
  clearInterval(timerInterval)

  const correctAnswer = questions.value[currentQuestionIndex.value].correctAnswer
  if (selectedAnswer === correctAnswer) {
    quizStore.incrementScore()
  }

  nextQuestion()
}

// Funksjon som går til neste spørsmål (eller avslutter quiz hvis ferdig)
function nextQuestion() {
  if (currentQuestionIndex.value + 1 < questions.value.length) {
    currentQuestionIndex.value++
    startTimer()
  } else {
    quizFinished.value = true
  }
}

// Når komponenten monteres, last inn quiz-data
onMounted(() => {
  loadQuizData()
})

// Rydd opp (stopp timer) når komponenten avmonteres
onUnmounted(() => {
  clearInterval(timerInterval)
})
</script>

<!-- 
  Denne komponenten viser en quiz hvor hvert spørsmål har en timer (10 sekunder).
  - Laster inn spørsmålene dynamisk fra en JSON-fil basert på quizId i URL.
  - Viser spørsmål, svar-alternativer, og en timer som teller ned.
  - Brukeren får poeng når de svarer riktig.
  - Går automatisk til neste spørsmål hvis tiden går ut.
  - Viser resultatside når quizen er ferdig.
-->
