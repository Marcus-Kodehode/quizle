<template>
  <div class="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
    <div
      class="bg-green-500 h-full transition-all duration-300"
      :style="{ width: progress + '%' }"
    ></div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  progress: Number,
})
</script>
