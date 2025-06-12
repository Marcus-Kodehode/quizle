<template>
  <div
    class="flex items-center max-w-xl p-4 mx-auto space-x-4 rounded-lg shadow-md bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
  >
    <!-- Maskot bilde -->
    <img :src="imageSrc" alt="Maskot" class="object-contain w-24 h-24" />

    <!-- Snakkeboble -->
    <div class="relative flex-1 p-4 text-black bg-white rounded-lg shadow">
      <!-- Tittel -->
      <div class="mb-2 text-lg font-bold">{{ title }}</div>

      <!-- Tekst med typewriter-effekt -->
      <p class="text-base whitespace-pre">{{ displayedText }}</p>

      <!-- Snakkeboble-hale (valgfri, kan fjernes om du vil) -->
      <!--
      <div
        class="absolute -left-2 bottom-4 h-0 w-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[10px] border-r-white"
      ></div>
      -->
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
    default: 50, // default 50ms per tegn
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
