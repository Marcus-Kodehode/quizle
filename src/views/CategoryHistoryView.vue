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
        :category="`/quiz/${quiz.id}`"
      />
    </div>
  </div>
</template>

<script setup>
import CategoryCard from '@/components/ui/CategoryCard.vue'

const quizzes = [
  { id: 'geo-intro', title: 'Introquiz i geografi' },
  { id: 'geo-capitals', title: 'Hovedsteder' },
  { id: 'geo-flags', title: 'Flagg' },
]
</script>
