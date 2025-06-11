<template>
  <!-- Ytre beholder-div for hele innholdet.
       Bruker Tailwind CSS-klasser for å gjøre layout og styling:
       - flex flex-col: setter opp en kolonne-basert fleksboks
       - items-center justify-center: sentrerer innholdet horisontalt og vertikalt
       - min-h-screen: gjør høyden minst like stor som skjermhøyden
       - p-8: gir padding (luft) rundt innholdet
       - text-white: gjør teksten hvit
       - bg-gradient-to-r ...: lager en horisontal bakgrunnsgradient -->
  <div
    class="flex flex-col items-center justify-center min-h-screen p-8 text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
  >
    <!-- Overskrift -->
    <h1 class="mb-8 text-4xl font-extrabold">Velg en kategori 📚</h1>

    <!-- Grid for å vise kategorikortene.
         - w-full max-w-4xl: gridens bredde blir maks 4xl
         - grid-cols-1 / sm:grid-cols-2 / md:grid-cols-3: antall kolonner justeres etter skjermstørrelse
         - gap-6: avstand mellom kortene -->
    <div class="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      <!-- Kategorikort: Hvert kort er en CategoryCard-komponent.
           Vi sender inn props (verdier) til hvert kort: title, description og category (URL for routing). -->
      <CategoryCard
        title="Matte"
        description="Test dine matteferdigheter!"
        category="/category/matte"
      />
      <CategoryCard
        title="Geografi"
        description="Hvor godt kjenner du verden?"
        category="/category/geografi"
      />
      <CategoryCard
        title="Historie"
        description="Hva husker du fra historietimen?"
        category="/category/historie"
      />
      <CategoryCard
        title="Dyr"
        description="Hvor mye kan du om dyrenes verden?"
        category="/category/dyr"
      />
    </div>
  </div>
</template>

<script setup>
/* 
  Importerer komponenten CategoryCard slik at vi kan bruke <CategoryCard /> i template-delen.
  Denne komponenten ligger i "components/ui/CategoryCard.vue".

  Hvert kort representerer en kategori som brukeren kan velge.
*/
import CategoryCard from '../components/ui/CategoryCard.vue'
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
