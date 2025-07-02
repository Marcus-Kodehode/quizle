<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen p-8 space-y-6 text-center text-white bg-gradient-to-r from-purple-500 to-pink-500"
  >
    <h2 class="text-4xl font-bold">Resultat 🎉</h2>
    <p class="text-xl">Du fikk {{ quizStore.score }} av {{ quizStore.totalQuestions }} riktige!</p>

    <ResultStars :score="quizStore.score" :total="quizStore.totalQuestions" />

    <RouterLink
      to="/"
      class="inline-block px-6 py-3 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
    >
      Tilbake til start
    </RouterLink>
  </div>
</template>

<script setup>
import { useQuizStore } from '@/stores/quiz'
import ResultStars from '@/components/shared/ResultStars.vue'
import { saveStarsForCategory } from '@/utils/starsStorage'

const quizStore = useQuizStore()

// 🎯 Beregn antall stjerner basert på score
const starsEarned = Math.max(
  quizStore.score / quizStore.totalQuestions >= 1
    ? 3
    : quizStore.score / quizStore.totalQuestions >= 0.5
      ? 2
      : 1,
  1,
)

// 👇 Bruk quizId fra store
const quizId = quizStore.currentQuizId || 'unknown'

console.log('✅ ResultView - quizId brukt for lagring:', quizId)
console.log('⭐ Stjerner tjent:', starsEarned)

saveStarsForCategory(quizId, starsEarned)
</script>

<!-- 
  Sammendrag av hva denne filen gjør:

  ResultView.vue er resultat-siden som vises etter at quizen er ferdig.

  Den gjør følgende:
  - Viser en overskrift ("Resultat 🎉").
  - Viser hvor mange riktige svar brukeren fikk av totalt antall spørsmål.
  - Viser en visuell vurdering gjennom ResultStars-komponenten.
  - Gir en knapp som fører brukeren tilbake til startsiden.

  Viktige teknologier som brukes her:
  - Pinia store (quizStore) for å hente poengsum og totalQuestions.
  - Komponentbruk (ResultStars) for å gjøre UI litt mer spennende.
  - Vue Router (RouterLink) for å kunne navigere tilbake til start.

  Denne siden er helt lesende — den viser kun data fra quizStore, 
  og lar brukeren gå tilbake til start hvis ønskelig.
-->
