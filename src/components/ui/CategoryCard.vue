<template>
  <!-- Hele kortet blir klikkbart -->
  <div
    @click="goToCategory"
    class="relative w-full h-48 overflow-hidden transition-transform duration-300 rounded-lg shadow-lg cursor-pointer hover:scale-105 group"
  >
    <!-- Bakgrunnsbilde -->
    <img
      v-if="image"
      :src="image"
      alt=""
      class="absolute inset-0 object-cover object-[50%_25%] w-full h-full transition-opacity duration-300 group-hover:opacity-100"
    />

    <!-- Overlay for mørk effekt -->
    <div
      class="absolute inset-0 transition-colors duration-300 bg-black bg-opacity-30 group-hover:bg-opacity-20"
    ></div>

    <!-- Tekst over bildet -->
    <div class="relative z-10 flex items-end h-full p-4">
      <h2 class="text-xl font-bold text-white">{{ title }}</h2>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  title: String,
  description: String,
  category: String,
  image: String, // Bilde-URL
})

const router = useRouter()

const goToCategory = () => {
  router.push(props.category)
}
</script>

<!-- 
  Sammendrag av hva denne filen gjør:

  CategoryCard.vue er en gjenbrukbar kort-komponent som brukes til å vise en kategori eller en quiz.

  Den gjør følgende:
  - Viser en tittel (title) og en beskrivelse (description).
  - Når kortet klikkes, navigerer brukeren til en URL (category).

  Teknologier og konsepter brukt her:
  - Props: gjør at denne komponenten er fleksibel og kan gjenbrukes med ulike verdier.
  - Programmatisk navigasjon med vue-router (router.push()).
  - Styling og interaktivitet med Tailwind CSS.

  Hvor brukes denne komponenten?
  - I HomeView.vue: for å vise hovedkategoriene.
  - I CategoryMathView.vue (og tilsvarende kategorier): for å vise tilgjengelige quizer.

  Oppsummering:
  Dette er et godt eksempel på en "presentasjonskomponent" som er enkel, gjenbrukbar, og kobles mot navigasjon i appen.
-->
