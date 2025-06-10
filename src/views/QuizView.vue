<template>
  <div
    class="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white flex flex-col items-center justify-center p-8"
  >
    <ProgressBar :current="currentQuestionIndex + 1" :total="questions.length" class="mb-6" />

    <QuestionCard
      v-if="!quizFinished"
      :questionData="questions[currentQuestionIndex]"
      :onAnswerSelected="handleAnswer"
    />

    <div v-else class="text-center space-y-4">
      <h2 class="text-3xl font-bold">Gratulerer! 🎉</h2>
      <p>Du er ferdig med quizen.</p>
      <RouterLink
        to="/result"
        class="inline-block mt-4 px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Se resultatet ditt ⭐
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useQuizStore } from '@/stores/quiz'
import ProgressBar from '@/components/shared/ProgressBar.vue'
import QuestionCard from '@/components/shared/QuestionCard.vue'

const quizStore = useQuizStore()

const questions = [
  { question: 'Hva er 5 + 3?', answers: ['6', '7', '8', '9'], correctAnswer: '8' },
  { question: 'Hva er 12 - 4?', answers: ['6', '7', '8', '9'], correctAnswer: '8' },
  { question: 'Hva er 2 x 6?', answers: ['10', '12', '14', '16'], correctAnswer: '12' },
  { question: 'Hva er 16 / 4?', answers: ['2', '3', '4', '5'], correctAnswer: '4' },
  { question: 'Hva er 9 + 1?', answers: ['9', '10', '11', '12'], correctAnswer: '10' },
]

const currentQuestionIndex = ref(0)
const quizFinished = ref(false)

quizStore.resetQuiz()
quizStore.setTotalQuestions(questions.length)

function handleAnswer() {
  if (currentQuestionIndex.value + 1 < questions.length) {
    currentQuestionIndex.value++
  } else {
    quizFinished.value = true
  }
}
</script>
