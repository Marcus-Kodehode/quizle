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

    <!-- Tekst og stjerner -->
    <div class="relative z-10 flex flex-col justify-end h-full p-4">
      <h2 class="text-xl font-bold text-white">{{ title }}</h2>

      <!-- Stjernevisning -->
      <div class="flex mt-1 space-x-1">
        <template v-for="n in 3" :key="n">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="w-5 h-5"
            :fill="n <= earnedStars ? 'yellow' : 'gray'"
          >
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted } from 'vue'
import { getStarsForCategory } from '@/utils/starsStorage'

const props = defineProps({
  title: String,
  description: String,
  category: String,
  image: String, // Bilde-URL
})

const earnedStars = ref(0)

onMounted(() => {
  earnedStars.value = getStarsForCategory(props.category)
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
