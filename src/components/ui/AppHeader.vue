<template>
  <header
    class="fixed top-0 left-0 z-40 w-full shadow-md bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
  >
    <div class="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
      <!-- Logo og tittel -->
      <router-link to="/" class="flex items-center space-x-2">
        <img src="@/assets/icons/logo.png" alt="Quizle logo" class="w-8 h-8 sm:w-10 sm:h-10" />
        <span class="text-lg font-bold text-white sm:text-xl">Quizle</span>
      </router-link>

      <!-- Desktop-nav -->
      <div class="hidden md:block">
        <NavLinks @navigateToCategories="scrollToCategories" />
      </div>

      <!-- Mobil burger knapp -->
      <button class="relative z-50 ml-auto md:hidden" @click="toggleMobileMenu" aria-label="Meny">
        <svg
          v-if="!mobileOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  </header>

  <!-- Mobilmeny overlay (utenpå header) -->
  <div
    v-if="mobileOpen"
    class="fixed inset-0 z-40 flex flex-col items-center justify-center space-y-6 text-xl font-semibold text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 md:hidden"
  >
    <NavLinks
      class="flex flex-col items-center space-y-6"
      @navigateToCategories="handleMobileCategoryClick"
      :onClick="closeMobileMenu"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavLinks from './NavLinks.vue'

const mobileOpen = ref(false)
const toggleMobileMenu = () => (mobileOpen.value = !mobileOpen.value)
const closeMobileMenu = () => (mobileOpen.value = false)

const scrollToCategories = () => {
  const el = document.getElementById('categories-section')
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}

const handleMobileCategoryClick = () => {
  scrollToCategories()
  closeMobileMenu()
}
</script>

<style scoped>
/* Enkelt fade + slide animasjon */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-leave-from {
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>

<!-- 
  Sammendrag av hva denne filen gjør:

  AppHeader.vue er toppmenyen til appen.

  Den gjør følgende:
  - Viser en logo (importert fra assets/icons/logo.png).
  - Viser navigasjonslenker (foreløpig med # som placeholder).
  - Bruker responsiv styling med Tailwind CSS.

  Hvor brukes den:
  - Den inkluderes i App.vue, slik at den vises på alle sider i appen.

  Kommentar:
  - Navigasjonslenkene kan senere kobles til ekte ruter med <RouterLink> for bedre navigasjon.
-->
