import { defineStore } from 'pinia'

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    score: 0,
    totalQuestions: 0,
  }),
  actions: {
    resetQuiz() {
      this.score = 0
      this.totalQuestions = 0
    },
    incrementScore() {
      this.score++
    },
    setTotalQuestions(count) {
      this.totalQuestions = count
    },
  },
})
