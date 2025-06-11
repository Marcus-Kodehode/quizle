<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen p-8 space-y-8 text-white bg-gradient-to-r from-purple-500 to-pink-500"
  >
    <!-- Progress text -->
    <div v-if="questions.length > 0" class="text-lg font-semibold">
      Spørsmål {{ currentQuestionIndex + 1 }} / {{ questions.length }}
    </div>

    <!-- Spørsmål og svar -->
    <div
      v-if="!quizFinished && questions.length > 0"
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

    <!-- Resultatvisning -->
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

    <!-- Loading fallback -->
    <div v-else class="text-xl">Laster spørsmål... ⏳</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useQuizStore } from '@/stores/quiz'

const route = useRoute()
const quizStore = useQuizStore()

const questions = ref([])
const currentQuestionIndex = ref(0)
const quizFinished = ref(false)

async function loadQuizData() {
  const quizId = route.params.id
  try {
    const data = await import(`@/data/${quizId}.json`)
    questions.value = data.default
    quizStore.resetQuiz()
    quizStore.setTotalQuestions(questions.value.length)
  } catch (error) {
    console.error('Kunne ikke laste quiz-data:', error)
  }
}

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

onMounted(() => {
  loadQuizData()
})
</script>
