<script setup>
import { ref, onMounted } from 'vue'

import CategoryCard from '@/components/ui/CategoryCard.vue'
import MascotBubble from '@/components/ui/MascotBubble.vue'
import IntroHero from '@/components/ui/IntroHero.vue'

import mathImage from '@/assets/icons/math.png'
import geographyImage from '@/assets/icons/geography.png'
import historyImage from '@/assets/icons/history.png'
import animalsImage from '@/assets/icons/animals.png'
import mascotImage from '@/assets/icons/chipmunk-hello-t.png'
import heroVideo from '@/assets/videos/hero-video.mp4'

const categorySectionRef = ref(null)

const scrollToCategories = () => {
  categorySectionRef.value?.scrollIntoView({ behavior: 'smooth' })
}

// Valgfritt: støtte for #hash i URL
onMounted(() => {
  if (window.location.hash === '#categories-section') {
    scrollToCategories()
  }
})
</script>

<template>
  <div
    class="flex flex-col items-center w-full text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
  >
    <IntroHero
      :videoSrc="heroVideo"
      title="Velkommen til Quizle!"
      text="Bli med på spennende quizer sammen med Quizzi 🦊"
      @scrollDown="scrollToCategories"
    />

    <MascotBubble
      class="mt-12"
      :imageSrc="mascotImage"
      title="Hei, jeg er Quizzi!"
      text="Velkommen til Quizle! Velg en kategori og bli med på moroa 🎉"
    />

    <!-- 📌 Denne har både ref og id nå -->
    <div id="categories-section" ref="categorySectionRef" class="w-full max-w-6xl px-4 py-8">
      <h1 class="mb-8 text-4xl font-extrabold text-center">Velg en kategori 📚</h1>
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <CategoryCard
          title="Matte"
          description="Test dine matteferdigheter!"
          category="/category/matte"
          :image="mathImage"
        />
        <CategoryCard
          title="Geografi"
          description="Hvor godt kjenner du verden?"
          category="/category/geografi"
          :image="geographyImage"
        />
        <CategoryCard
          title="Historie"
          description="Hva husker du fra historietimen?"
          category="/category/historie"
          :image="historyImage"
        />
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
