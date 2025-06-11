<template>
  <!-- Ytre div for kortet.
       - @click="goToCategory": Når kortet klikkes, kjører vi funksjonen goToCategory (som navigerer til riktig side).
       - Styling: hvit bakgrunn, avrundede hjørner, skygge, animasjon ved hover (skalering). -->
  <div
    @click="goToCategory"
    class="p-6 text-center transition-transform duration-300 bg-white rounded-lg shadow-md cursor-pointer hover:scale-105"
  >
    <!-- Viser tittel (prop 'title') -->
    <h2 class="mb-2 text-xl font-bold">{{ title }}</h2>

    <!-- Viser beskrivelse (prop 'description') -->
    <p class="text-sm text-gray-600">{{ description }}</p>
  </div>
</template>

<script setup>
// Importerer useRouter fra vue-router slik at vi kan navigere programmatisk.
import { useRouter } from 'vue-router'

// Definerer hvilke props denne komponenten mottar.
// Når du bruker <CategoryCard ... /> sender du inn disse verdiene fra foreldrekomponenter (f.eks. HomeView).
const props = defineProps({
  title: String, // Tittelen som vises på kortet.
  description: String, // Beskrivelsen som vises på kortet.
  category: String, // URL-en vi skal navigere til når kortet klikkes.
})

// Lager en router-instans som vi kan bruke til å navigere.
const router = useRouter()

// Funksjon som kjører når kortet klikkes.
// Bruker router.push() for å navigere til verdien av props.category (som er en URL-sti, f.eks. "/quiz/math-intro").
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
