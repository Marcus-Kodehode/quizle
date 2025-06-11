<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-purple-500 to-pink-500"
  >
    <h1 class="mb-6 text-3xl font-bold text-white">Velg en quiz i Matte 📐</h1>

    <div class="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      <CategoryCard
        v-for="quiz in quizzes"
        :key="quiz.path"
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
    path: '/quiz/math-intro',
    title: 'Introquiz i matte',
    description: 'Test dine matteferdigheter!',
  },
  {
    path: '/quiz/math-advanced',
    title: 'Avansert matte',
    description: 'Utfordre deg selv med vanskeligere matte',
  },
  {
    path: '/quiz/timed/math-timed',
    title: 'Regning på tid',
    description: 'Hvor rask er du i hoderegning?',
  },
]
</script>

<!-- 
  Sammendrag av hva denne filen gjør:

  CategoryMathView.vue er kategorisiden for "Matte".

  Den gjør følgende:
  - Viser en overskrift ("Velg en quiz i Matte 📐").
  - Viser en liste med quizene i matte-kategorien, som CategoryCard-komponenter.
  - Hver CategoryCard har en lenke som går til riktig quiz-side (/quiz/quiz-id).

  Viktige konsepter som brukes her:
  - v-for for å iterere over quizzes-arrayen og lage flere komponenter.
  - Props: vi sender title og category som props til CategoryCard.
  - Dynamisk URL-bygging: vi bruker quiz.id til å lage riktig URL for hver quiz.
  - Komponentbruk (CategoryCard) for å gjenbruke samme layout flere steder.

  Dette er et godt eksempel på hvordan du kan strukturere kategorisider i appen din.
  Når du lager nye kategorier (f.eks. Geografi, Historie), kan du bruke samme mønster som i denne filen.
-->
