<template>
  <AppHeader />
  <main class="min-h-screen">
    <router-view />
  </main>
  <AppFooter />
</template>

<script setup>
import AppHeader from './components/ui/AppHeader.vue'
import AppFooter from './components/ui/AppFooter.vue'
</script>
