<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-purple-500 to-pink-500"
  >
    <h1 class="mb-6 text-3xl font-bold text-white">Velg en quiz i Geografi 🌍</h1>

    <div class="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      <CategoryCard
        v-for="quiz in quizzes"
        :key="quiz.id"
        :title="quiz.title"
        :description="quiz.description"
        :category="quiz.path"
      />
    </div>
  </div>
</template>

<script setup>
import CategoryCard from '@/components/ui/CategoryCard.vue'

const quizzes = [
  {
    id: 'geography-intro',
    title: 'Introquiz i geografi',
    description: 'Test dine grunnleggende geografikunnskaper!',
    path: '/quiz/geography-intro',
  },
  {
    id: 'geography-advanced',
    title: 'Avansert geografi',
    description: 'Utfordre deg selv med avanserte spørsmål!',
    path: '/quiz/geography-advanced',
  },
  {
    id: 'geography-timed',
    title: 'Geografi på tid',
    description: 'Test hvor raskt du kan svare!',
    path: '/quiz/timed/geography-timed',
  },
]
</script>
