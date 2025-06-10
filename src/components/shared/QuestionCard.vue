<template>
  <div class="bg-white p-6 rounded shadow-md text-center max-w-xl mx-auto">
    <h2 class="text-xl font-bold mb-4">{{ questionData.question }}</h2>

    <div class="grid grid-cols-1 gap-4">
      <button
        v-for="(answer, index) in questionData.answers"
        :key="index"
        @click="selectAnswer(answer)"
        class="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {{ answer }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useQuizStore } from '@/stores/quiz'

const props = defineProps({
  questionData: Object,
  onAnswerSelected: Function,
})

const quizStore = useQuizStore()

function selectAnswer(answer) {
  if (answer === props.questionData.correctAnswer) {
    quizStore.incrementScore()
  }
  props.onAnswerSelected()
}
</script>
