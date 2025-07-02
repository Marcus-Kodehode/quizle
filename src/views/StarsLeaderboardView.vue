<template>
  <div class="min-h-screen p-8 pt-24 text-white bg-gradient-to-r from-purple-500 to-pink-500">
    <h1 class="mb-6 text-3xl font-bold text-center">Dine samlede stjerner ✨</h1>

    <div class="max-w-2xl mx-auto space-y-4">
      <div
        v-for="(stars, categoryKey) in starsData"
        :key="categoryKey"
        class="flex items-center justify-between px-4 py-3 bg-white rounded bg-opacity-10"
      >
        <span class="text-lg">{{ getCategoryTitle(categoryKey) }}</span>
        <div class="flex space-x-1">
          <template v-for="n in 3" :key="n">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              class="w-5 h-5"
              :fill="n <= stars ? 'yellow' : 'gray'"
            >
              <path
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
              />
            </svg>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getAllStars } from '@/utils/starsStorage'
import { ref, onMounted } from 'vue'

const starsData = ref({})

onMounted(() => {
  starsData.value = getAllStars()
})

// Map intern ID → pen tittel
function getCategoryTitle(key) {
  const map = {
    'math-intro': 'Introquiz i matte',
    'math-advanced': 'Avansert matte',
    'math-timed': 'Regning på tid',
    'animals-intro': 'Introquiz om dyr',
    'animals-advanced': 'Avansert dyrequiz',
    'animals-timed': 'Dyrequiz på tid',
    'history-intro': 'Innføring i historie',
    'history-advanced': 'Historieekspert',
    'history-timed': 'Historie på tid',
    'geography-intro': 'Grunnleggende geografi',
    'geography-advanced': 'Avansert geografi',
    'geography-timed': 'Geografi på tid',
  }

  return map[key] || key // fallback
}
</script>
