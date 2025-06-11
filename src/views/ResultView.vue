<template>
  <!-- Ytre beholder-div for resultat-siden.
       Layout:
       - min-h-screen: fyller hele høyden av skjermen
       - bg-gradient-to-r: horisontal bakgrunnsgradient
       - text-white: hvit tekst
       - flex flex-col items-center justify-center: sentrerer innhold både horisontalt og vertikalt
       - p-8: padding rundt innholdet
       - text-center: sentrerer tekst
       - space-y-6: avstand mellom elementene -->
  <div
    class="flex flex-col items-center justify-center min-h-screen p-8 space-y-6 text-center text-white bg-gradient-to-r from-purple-500 to-pink-500"
  >
    <!-- Overskrift -->
    <h2 class="text-4xl font-bold">Resultat 🎉</h2>

    <!-- Viser poengsummen hentet fra quizStore -->
    <p class="text-xl">Du fikk {{ quizStore.score }} av {{ quizStore.totalQuestions }} riktige!</p>

    <!-- Viser ResultStars-komponent, som antagelig gir en visuell stjerne-vurdering basert på resultatet -->
    <ResultStars :score="quizStore.score" :total="quizStore.totalQuestions" />

    <!-- Lenke tilbake til startsiden (hjem) -->
    <RouterLink
      to="/"
      class="inline-block px-6 py-3 mt-4 text-white bg-blue-500 rounded hover:bg-blue-600"
    >
      Tilbake til start
    </RouterLink>
  </div>
</template>

<script setup>
/*
  Importerer useQuizStore fra quiz-storen vår (Pinia).
  Her henter vi score og totalQuestions for å vise dem i UI.
*/
import { useQuizStore } from '@/stores/quiz'

/*
  Importerer ResultStars-komponenten, som brukes til å vise stjerner basert på resultatet.
*/
import ResultStars from '@/components/shared/ResultStars.vue'

/*
  Lager en quizStore-instans slik at vi kan bruke quizStore.score og quizStore.totalQuestions
  direkte i template-delen.
*/
const quizStore = useQuizStore()
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
