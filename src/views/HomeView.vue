<template>
  <!-- Hele siden -->
  <div
    class="flex flex-col items-center w-full text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
  >
    <!-- Hero video på toppen -->
    <IntroHero
      :videoSrc="heroVideo"
      title="Velkommen til Quizle!"
      text="Bli med på spennende quizer sammen med Quizzi 🦊"
    />

    <!-- Mascot velkomstboble -->
    <MascotBubble
      :imageSrc="mascotImage"
      title="Hei, jeg er Quizzi!"
      text="Velkommen til Quizle! Velg en kategori og bli med på moroa 🎉"
    />

    <!-- Innhold (kategorier) -->
    <div class="w-full max-w-6xl px-4 py-8">
      <!-- Overskrift -->
      <h1 class="mb-8 text-4xl font-extrabold text-center">Velg en kategori 📚</h1>

      <!-- Grid med kategorikort -->
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <!-- Matte -->
        <CategoryCard
          title="Matte"
          description="Test dine matteferdigheter!"
          category="/category/matte"
          :image="mathImage"
        />
        <!-- Geografi -->
        <CategoryCard
          title="Geografi"
          description="Hvor godt kjenner du verden?"
          category="/category/geografi"
          :image="geographyImage"
        />
        <!-- Historie -->
        <CategoryCard
          title="Historie"
          description="Hva husker du fra historietimen?"
          category="/category/historie"
          :image="historyImage"
        />
        <!-- Dyr -->
        <CategoryCard
          title="Dyr"
          description="Hvor mye kan du om dyrenes verden?"
          category="/category/dyr"
          :image="animalsImage"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
/* Importer komponentene */
import CategoryCard from '@/components/ui/CategoryCard.vue'
import MascotBubble from '@/components/ui/MascotBubble.vue'
import IntroHero from '@/components/ui/IntroHero.vue'

/* Importer bildene */
import mathImage from '@/assets/icons/math.png'
import geographyImage from '@/assets/icons/geography.png'
import historyImage from '@/assets/icons/history.png'
import animalsImage from '@/assets/icons/animals.png'
import mascotImage from '@/assets/icons/chipmunk-hello-t.png'

/* Importer videoen riktig */
import heroVideo from '@/assets/videos/hero-video.mp4'
</script>

<!-- 
  Sammendrag av hva denne filen gjør:

  HomeView.vue er "Hjem"-siden i appen din.

  Den viser:
  - En overskrift "Velg en kategori 📚"
  - Et rutenett (grid) med ulike "CategoryCard"-komponenter.
    Hvert kort er klikkbart og representerer en quiz-kategori (Matte, Geografi, Historie, Dyr).

  Når brukeren klikker på et kort, navigerer appen til riktig kategori-side
  (ved hjelp av Vue Router og "category"-prop'en som angir URL).

  Styling gjøres med Tailwind CSS for å få fin layout og farger.
-->
