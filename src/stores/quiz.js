import { defineStore } from 'pinia'

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    score: 0, // Antall riktige svar
    totalQuestions: 0, // Totalt antall spørsmål
    currentQuizId: '', // 💡 Tom streng istedenfor null for konsistens
  }),

  actions: {
    // Tilbakestiller quiz-status
    resetQuiz() {
      this.score = 0
      this.totalQuestions = 0
      this.currentQuizId = ''
    },

    // Øker poengsum med 1
    incrementScore() {
      this.score++
    },

    // Setter antall spørsmål
    setTotalQuestions(count) {
      this.totalQuestions = count
    },

    // Setter aktiv quiz-ID (f.eks. "math-intro")
    setCurrentQuizId(id) {
      this.currentQuizId = id || '' // fallback hvis id er undefined
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
