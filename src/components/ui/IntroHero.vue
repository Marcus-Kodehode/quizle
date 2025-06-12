<template>
  <!-- Hero container -->
  <div
    class="relative flex items-center justify-center w-full overflow-hidden"
    style="height: 90vh"
  >
    <!-- Juster høyden her om du vil -->
    <!-- Hero video -->
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute top-0 left-0 object-cover object-top w-full h-full"
    >
      <source :src="videoSrc" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Overlay content -->
    <div
      v-if="title || text"
      class="relative z-10 max-w-2xl p-6 text-center text-white rounded-lg bg-black/40 backdrop-blur-sm"
    >
      <h2 v-if="title" class="mb-2 text-4xl font-extrabold drop-shadow">{{ title }}</h2>
      <p v-if="text" class="text-lg drop-shadow">{{ text }}</p>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute flex justify-center w-full bottom-4">
      <span class="text-3xl text-white animate-bounce">⌄</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  videoSrc: String,
  title: String,
  text: String,
})
</script>

<style scoped>
video {
  object-fit: cover;
  object-position: top; /* Kan endres til center, bottom, etc om du vil */
}
</style>
