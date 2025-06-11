<template>
  <!-- Ytre div for stjernene.
       - flex: viser stjernene på rad
       - space-x-2: litt avstand mellom stjernene
       - justify-center: sentrerer stjernene horisontalt
       - mt-4: margin-top for avstand fra innholdet over -->
  <div class="flex justify-center mt-4 space-x-2">
    <!-- Lager 3 stjerner med v-for (n in 3).
         Bruker n som nøkkel.
         Viser enten en gul stjerne eller en grå stjerne basert på starCount. -->
    <template v-for="n in 3" :key="n">
      <!-- Hvis n <= starCount, vis gul stjerne -->
      <svg
        v-if="n <= starCount"
        xmlns="http://www.w3.org/2000/svg"
        fill="yellow"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-10 h-10"
      >
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        />
      </svg>

      <!-- Hvis n > starCount, vis grå stjerne -->
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="gray"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-10 h-10"
      >
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        />
      </svg>
    </template>
  </div>
</template>

<script setup>
// Importerer computed fra Vue for å lage en beregnet verdi (starCount).
import { computed } from 'vue'

// Definerer props som komponenten mottar.
// - score: antall riktige svar brukeren fikk
// - total: totalt antall spørsmål
const props = defineProps({
  score: Number,
  total: Number,
})

// Lager en beregnet verdi (starCount) som bestemmer hvor mange stjerner som skal vises.
// Regler:
// - 100% riktige svar = 3 stjerner
// - 50-99% riktige = 2 stjerner
// - under 50% riktige = 1 stjerne
const starCount = computed(() => {
  const percent = (props.score / props.total) * 100
  if (percent >= 100) return 3
  if (percent >= 50) return 2
  return 1
})
</script>

<!-- 
  Sammendrag av hva denne filen gjør:

  ResultStars.vue viser en visuell vurdering av brukerens quizresultat i form av 1-3 stjerner.

  Den gjør følgende:
  - Tar inn props score og total (fra ResultView.vue).
  - Beregner hvor mange stjerner som skal vises basert på prosent riktig.
  - Viser gule stjerner for oppnådd vurdering, og grå stjerner for resten.

  Teknologier og konsepter brukt:
  - Props: gjør at komponenten er fleksibel og kan brukes hvor som helst.
  - Computed property (starCount): for å beregne dynamisk antall stjerner.
  - SVG-grafikk: for å vise stjernene.
  - v-for: for å vise 3 stjerner på rad.

  Hvor brukes denne komponenten?
  - I ResultView.vue, under teksten som viser poengsummen.

  Kommentar:
  ResultStars er en fin måte å gi brukeren en visuell tilbakemelding på prestasjonen i quizen.
-->
