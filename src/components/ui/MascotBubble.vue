<template>
  <div
    class="flex flex-col items-center w-full max-w-3xl px-4 py-6 mx-auto space-y-4 rounded-lg shadow-md sm:flex-row sm:space-y-0 sm:space-x-4 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
  >
    <!-- Maskot bilde -->
    <img :src="imageSrc" alt="Maskot" class="object-contain w-24 h-24 shrink-0" />

    <!-- Snakkeboble -->
    <div
      class="relative w-full p-4 text-black bg-white rounded-lg shadow sm:min-h-[96px] sm:flex sm:flex-col sm:justify-center"
    >
      <!-- Tittel -->
      <div class="mb-2 text-lg font-bold leading-snug">{{ title }}</div>

      <!-- Tekst med typewriter-effekt -->
      <p class="text-base leading-snug break-words whitespace-pre-line">
        {{ displayedText }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'

const props = defineProps({
  imageSrc: String,
  title: String,
  text: String,
  speed: {
    type: Number,
    default: 50,
  },
})

const displayedText = ref('')

watchEffect(() => {
  displayedText.value = ''
  let index = 0
  const interval = setInterval(() => {
    if (index < props.text.length) {
      displayedText.value += props.text[index]
      index++
    } else {
      clearInterval(interval)
    }
  }, props.speed)
})
</script>
