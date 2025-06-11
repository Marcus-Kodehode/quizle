<script setup>
// Importerer logo-bildet som vi bruker i headeren.
// Dette er en vanlig måte å importere bilder i Vue / Vite.
import logo from '@/assets/icons/logo.png'
</script>

<template>
  <!-- Ytre header-element.
       Styling:
       - Bakgrunnsgradient
       - Hvit tekst
       - Padding
       - Skygge (shadow) -->
  <header class="p-2 text-white shadow-md bg-gradient-to-r from-purple-500 to-pink-500">
    <!-- Innholdet i headeren er sentrert og har flekslayout.
         justify-between: plass mellom logo og nav -->
    <div class="container flex items-center justify-between mx-auto">
      <!-- Logo-del -->
      <div class="flex items-center space-x-2">
        <!-- Dynamisk src fra importert logo -->
        <img
          :src="logo"
          alt="Quizle logo"
          class="object-contain h-16 bg-transparent md:h-20 lg:h-24"
        />
      </div>

      <!-- Navigasjonslenker (foreløpig statiske) -->
      <nav class="space-x-6 text-sm md:text-base">
        <a href="#" class="hover:underline">Hjem</a>
        <a href="#" class="hover:underline">Kategorier</a>
        <a href="#" class="hover:underline">Om oss</a>
      </nav>
    </div>
  </header>
</template>

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
