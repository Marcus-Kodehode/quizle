<template>
  <div
    @click="goToCategory"
    class="p-6 text-center transition-transform duration-300 bg-white rounded-lg shadow-md cursor-pointer hover:scale-105"
  >
    <h2 class="mb-2 text-xl font-bold">{{ title }}</h2>
    <p class="text-sm text-gray-600">{{ description }}</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  title: String,
  description: String,
  category: String,
})

const router = useRouter()

const goToCategory = () => {
  router.push(props.category) // ⚠️ Ikke legg til ekstra '/' her!
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
