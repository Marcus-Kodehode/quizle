<template>
  <div
    class="relative flex items-center justify-center w-full overflow-hidden"
    :style="`height: calc(100vh - ${headerHeight}px)`"
  >
    <!-- Hero video -->
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute inset-0 object-cover object-top w-full h-full"
    >
      <source :src="videoSrc" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Tekst overlay -->
    <div
      v-if="title || text"
      class="relative z-10 max-w-2xl p-6 text-center text-white rounded-lg bg-black/40 backdrop-blur-sm"
    >
      <h2 v-if="title" class="mb-2 text-4xl font-extrabold drop-shadow">{{ title }}</h2>
      <p v-if="text" class="text-lg drop-shadow">{{ text }}</p>
    </div>

    <!-- Scroll pil -->
    <div class="absolute flex justify-center w-full bottom-4">
      <span class="text-3xl text-white cursor-pointer animate-bounce" @click="$emit('scrollDown')">
        ⌄
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  videoSrc: String,
  title: String,
  text: String,
})
defineEmits(['scrollDown'])

const headerHeight = 0.5
</script>

<style scoped>
/* Fikser video overflow på mobil */
video {
  object-fit: cover;
  object-position: top;
}
</style>
