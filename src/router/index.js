// Importerer funksjoner fra vue-router:
// - createRouter: lager selve routeren som brukes i appen
// - createWebHistory: bruker browserens historikk-API for "pen" URL (uten hash-tegn).
import { createRouter, createWebHistory } from 'vue-router'

// Importerer de ulike visningene (views) som vi skal navigere mellom.
import HomeView from '@/views/HomeView.vue'
import CategoryMathView from '@/views/CategoryMathView.vue'
import CategoryGeographyView from '@/views/CategoryGeographyView.vue'
import CategoryHistoryView from '@/views/CategoryHistoryView.vue'
import CategoryAnimalsView from '@/views/CategoryAnimalsView.vue'
import QuizView from '@/views/QuizView.vue'
import ResultView from '@/views/ResultView.vue'

// Definerer en liste med ruter (routes).
// Hver rute forteller:
// - hvilken sti (path) som skal matche i URL
// - et navn på ruten (name) — kan brukes til navigasjon
// - hvilken komponent (component) som skal vises når denne ruten er aktiv.
const routes = [
  // Hjem-siden
  { path: '/', name: 'Home', component: HomeView },

  // Kategorisider
  { path: '/category/matte', name: 'CategoryMath', component: CategoryMathView },
  { path: '/category/geografi', name: 'CategoryGeography', component: CategoryGeographyView },
  { path: '/category/historie', name: 'CategoryHistory', component: CategoryHistoryView },
  { path: '/category/dyr', name: 'CategoryAnimals', component: CategoryAnimalsView },

  // Quiz-siden
  // Merk: :id betyr at dette er en dynamisk del av URL-en (f.eks. /quiz/math-intro)
  // props: true gjør at vi kan motta quiz-id som en prop i QuizView.
  { path: '/quiz/:id', name: 'Quiz', component: QuizView, props: true },

  // Resultatsiden
  { path: '/result', name: 'Result', component: ResultView },
]

// Lager selve router-instansen.
// - Bruker createWebHistory() for pen URL (f.eks. /quiz/math-intro i stedet for /#/quiz/math-intro)
// - Bruker routes-listen som vi definerte over.
const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Eksporterer router slik at vi kan bruke den i appen (f.eks. i main.js).
export default router

// Sammendrag av hva denne filen gjør:

// index.js definerer routeren for hele appen.

// Hva er en router?
// 👉 En router styrer navigasjonen i en SPA (Single Page Application).
// 👉 Når brukeren navigerer til en URL (f.eks. /category/matte),
//    bestemmer routeren hvilken komponent som skal vises.

// Denne filen:
// - Definerer hvilke ruter appen har (Home, kategorier, quiz, resultater).
// - Støtter dynamiske ruter for quiz (ved hjelp av /quiz/:id).
// - Gjør det mulig for brukeren å bevege seg rundt i appen uten å laste siden på nytt.

// Når brukes dette?
// - Når du bruker <RouterLink> eller programmatisk navigasjon (router.push()),
//   er det denne routeren som bestemmer hva som skjer.

// Oppsummering:
// - Denne filen kobler sammen URL-er med de riktige Vue-komponentene.
// - Gjør det mulig å bygge en navigerbar app som føles som en ekte web-app.
