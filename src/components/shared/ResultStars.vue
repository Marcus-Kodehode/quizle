<template>
  <div class="flex space-x-2 justify-center mt-4">
    <template v-for="n in 3" :key="n">
      <svg
        v-if="n <= starCount"
        xmlns="http://www.w3.org/2000/svg"
        fill="yellow"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-10 h-10"
      >
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        />
      </svg>

      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        fill="gray"
        viewBox="0 0 24 24"
        stroke="currentColor"
        class="w-10 h-10"
      >
        <path
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        />
      </svg>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  score: Number,
  total: Number,
})

const starCount = computed(() => {
  const percent = (props.score / props.total) * 100
  if (percent >= 100) return 3
  if (percent >= 50) return 2
  return 1
})
</script>
