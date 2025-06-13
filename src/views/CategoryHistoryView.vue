<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-purple-500 to-pink-500"
  >
    <h1 class="mb-6 text-3xl font-bold text-white">Velg en quiz i Historie 🏛️</h1>

    <div class="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      <CategoryCard
        v-for="quiz in quizzes"
        :key="quiz.id"
        :title="quiz.title"
        :description="quiz.description"
        :category="quiz.path"
        :image="quiz.image"
      />
    </div>
  </div>
</template>

<script setup>
import CategoryCard from '@/components/ui/CategoryCard.vue'
const beginnerImage = new URL('@/assets/icons/beginner.png', import.meta.url).href
const advancedImage = new URL('@/assets/icons/advanced.png', import.meta.url).href
const timedImage = new URL('@/assets/icons/timed.png', import.meta.url).href

const quizzes = [
  {
    id: 'history-intro',
    title: 'Introquiz i historie',
    description: 'Hva kan du om historie?',
    path: '/quiz/history-intro', // vanlig quiz → QuizView.vue
    image: beginnerImage,
  },
  {
    id: 'history-advanced',
    title: 'Avansert historie',
    description: 'Utfordre deg selv med avanserte spørsmål!',
    path: '/quiz/history-advanced', // vanlig quiz → QuizView.vue
    image: advancedImage,
  },
  {
    id: 'history-timed',
    title: 'Historie på tid',
    description: 'Hvor raskt kan du svare på historie-spørsmål?',
    path: '/quiz/timed/history-timed', // TIMED quiz → QuizTimedView.vue
    image: timedImage,
  },
]
</script>
