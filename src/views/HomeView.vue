<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white p-8 space-y-6"
  >
    <h1 class="text-4xl font-extrabold mb-8">Velg en kategori 📚</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-4xl">
      <CategoryCard title="Matte" description="Test dine matteferdigheter!" category="matte" />
      <CategoryCard
        title="Geografi"
        description="Hvor godt kjenner du verden?"
        category="geografi"
      />
      <CategoryCard
        title="Historie"
        description="Hva husker du fra historietimen?"
        category="historie"
      />
      <CategoryCard title="Dyr" description="Hvor mye kan du om dyrenes verden?" category="dyr" />
    </div>
  </div>
</template>

<script setup>
import CategoryCard from '../components/ui/CategoryCard.vue'
</script>
