<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-green-400 to-blue-500 text-white"
  >
    <h1 class="text-4xl font-bold mb-4">Quiz: {{ category }}</h1>
    <p class="text-lg">Her kommer spørsmålene etter hvert 🚀</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const category = route.params.category
</script>
