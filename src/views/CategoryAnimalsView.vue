<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-purple-500 to-pink-500"
  >
    <h1 class="mb-6 text-3xl font-bold text-white">Velg en quiz om Dyr 🐾</h1>

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
    id: 'animals-intro',
    title: 'Introquiz om dyr',
    description: 'Hvor mye kan du om dyrenes verden?',
    path: '/quiz/animals-intro', // vanlig quiz
    image: beginnerImage,
  },
  {
    id: 'animals-advanced',
    title: 'Avansert dyrequiz',
    description: 'For deg som kan masse om dyr!',
    path: '/quiz/animals-advanced', // vanlig quiz
    image: advancedImage,
  },
  {
    id: 'animals-timed',
    title: 'Dyrequiz på tid',
    description: 'Hvor raskt klarer du å svare på dyrespørsmål?',
    path: '/quiz/timed/animals-timed', // TIMED quiz
    image: timedImage,
  },
]
</script>
