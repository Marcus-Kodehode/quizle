<template>
  <!-- Viser toppmenyen/header på siden -->
  <AppHeader />

  <!-- Hovedinnholdet på siden. "router-view" er en spesiell komponent som bytter innholdet
       basert på hvilken rute (URL) brukeren er på. Fungerer som en slags plassholder for sidene dine. -->
  <main class="min-h-screen">
    <router-view />
  </main>

  <!-- Viser bunnteksten/footer på siden -->
  <AppFooter />
</template>

<script setup>
/* 
  Importerer komponenten AppHeader slik at vi kan bruke <AppHeader /> i template-delen.
  Denne komponenten ligger i "components/ui/AppHeader.vue"
*/
import AppHeader from './components/ui/AppHeader.vue'

/* 
  Importerer komponenten AppFooter slik at vi kan bruke <AppFooter /> i template-delen.
  Denne komponenten ligger i "components/ui/AppFooter.vue"
*/
import AppFooter from './components/ui/AppFooter.vue'
</script>

<!-- 
  Sammendrag av hva denne filen gjør:

  App.vue er hovedkomponenten i en Vue.js-applikasjon. 
  Det er som "rammen" rundt alt innholdet i appen.
  
  - Den viser alltid en toppmeny (AppHeader) og en bunntekst (AppFooter).
  - I midten har den <router-view>, som automatisk viser innholdet til den siden (komponenten) 
    brukeren navigerer til via URL (ruting). 

  Når du legger til flere sider i appen din (f.eks. en "Hjem"-side, en "Om oss"-side),
  er det <router-view> som sørger for at riktige komponent vises i hovedområdet.
-->
