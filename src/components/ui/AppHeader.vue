<script setup>
import logo from '@/assets/icons/logo.png'
</script>

<template>
  <header class="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 shadow-md">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Logo med bedre styling -->
      <div class="flex items-center space-x-2">
        <img
          :src="logo"
          alt="Quizle logo"
          class="h-16 md:h-20 lg:h-24 object-contain bg-transparent"
        />
      </div>

      <!-- Nav -->
      <nav class="space-x-6 text-sm md:text-base">
        <a href="#" class="hover:underline">Hjem</a>
        <a href="#" class="hover:underline">Kategorier</a>
        <a href="#" class="hover:underline">Om oss</a>
      </nav>
    </div>
  </header>
</template>
