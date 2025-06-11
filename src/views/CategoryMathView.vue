<template>
  <!-- Ytre beholder-div for kategorisiden (her: Matte).
       Bruker flexbox for å sentrere innhold, med bakgrunnsgradient. -->
  <div
    class="flex flex-col items-center justify-center min-h-screen p-8 bg-gradient-to-r from-purple-500 to-pink-500"
  >
    <!-- Overskrift -->
    <h1 class="mb-6 text-3xl font-bold text-white">Velg en quiz i Matte 📐</h1>

    <!-- Grid som viser quizene i denne kategorien.
         - Bruker v-for til å iterere over quizzes-arrayen og lage ett CategoryCard per quiz.
         - Bruker responsivt grid (1, 2 eller 3 kolonner avhengig av skjermstørrelse). -->
    <div class="grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      <CategoryCard
        v-for="quiz in quizzes"
        :key="quiz.id"
        :title="quiz.title"
        :category="`/quiz/${quiz.id}`"
      />
      <!-- Lager URL til quizen dynamisk basert på quiz.id -->
    </div>
  </div>
</template>

<script setup>
/*
  Importerer CategoryCard-komponenten slik at vi kan bruke <CategoryCard /> i template-delen.
*/
import CategoryCard from '@/components/ui/CategoryCard.vue'

/*
  Lager en lokal array som inneholder quizene i matte-kategorien.
  Hver quiz er et objekt med id og tittel:
  - id brukes til å bygge URL (f.eks. /quiz/math-intro)
  - title vises på CategoryCard
*/
const quizzes = [
  { id: 'math-intro', title: 'Introquiz i matte' },
  { id: 'math-advanced', title: 'Avansert matte' },
  { id: 'math-timed', title: 'Regning på tid' },
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
