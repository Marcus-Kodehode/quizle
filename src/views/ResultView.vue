<template>
  <div
    class="min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white flex flex-col items-center justify-center p-8 text-center space-y-6"
  >
    <h2 class="text-4xl font-bold">Resultat 🎉</h2>
    <p class="text-xl">Du fikk {{ quizStore.score }} av {{ quizStore.totalQuestions }} riktige!</p>

    <ResultStars :score="quizStore.score" :total="quizStore.totalQuestions" />

    <RouterLink
      to="/"
      class="inline-block mt-4 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Tilbake til start
    </RouterLink>
  </div>
</template>

<script setup>
import { useQuizStore } from '@/stores/quiz'
import ResultStars from '@/components/shared/ResultStars.vue'

const quizStore = useQuizStore()
</script>
