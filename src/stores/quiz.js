// Importerer defineStore fra Pinia.
// defineStore brukes for å definere en "store" — et globalt sted hvor vi kan lagre og dele data i appen.
import { defineStore } from 'pinia'

// Lager og eksporterer en Pinia-store som heter 'quiz'.
// Vi bruker useQuizStore() for å hente denne i komponentene våre.
export const useQuizStore = defineStore('quiz', {
  // state er en funksjon som returnerer et objekt som inneholder de dataene vi vil lagre i store.
  // Disse dataene er "reaktive" — når de endres, vil alle komponenter som bruker dem oppdatere seg automatisk.
  state: () => ({
    score: 0, // Antall riktige svar brukeren har fått i quizen.
    totalQuestions: 0, // Totalt antall spørsmål i quizen.
  }),

  // actions er funksjoner vi definerer for å endre på state.
  // Ved å bruke actions holder vi endringene ryddige og enkle å følge.

  actions: {
    // resetQuiz: Tilbakestiller quizdata — brukes når vi starter en ny quiz.
    resetQuiz() {
      this.score = 0
      this.totalQuestions = 0
    },

    // incrementScore: Øker poengsummen med 1 — brukes når brukeren svarer riktig.
    incrementScore() {
      this.score++
    },

    // setTotalQuestions: Setter hvor mange spørsmål det er i quizen.
    // Brukes når vi har lastet inn spørsmålene fra json-filen.
    setTotalQuestions(count) {
      this.totalQuestions = count
    },
  },
})

// Sammendrag av hva denne filen gjør:

// quiz.js definerer en Pinia-store kalt 'quiz'.

// Denne storen brukes til å holde på og styre quiz-state som hele appen kan bruke:

// - **score**: Antall riktige svar brukeren har fått.
// - **totalQuestions**: Totalt antall spørsmål i den nåværende quizen.

// Den tilbyr tre actions:
// - `resetQuiz()` — nullstiller quizdata (ny quiz).
// - `incrementScore()` — øker poengsummen når brukeren svarer riktig.
// - `setTotalQuestions(count)` — setter antall spørsmål i quizen når vi har lastet dem inn.

// Hvordan det brukes:
// - I `QuizView.vue`: Vi bruker quizStore til å oppdatere poengsum og antall spørsmål.
// - I `ResultView.vue`: Vi leser quizStore.score og quizStore.totalQuestions for å vise resultatet.

// Konsept: En **Pinia store** gjør det enkelt å dele data mellom forskjellige komponenter, uten å måtte sende props hele veien ned.
