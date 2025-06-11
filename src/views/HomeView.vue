<template>
  <div
    class="flex flex-col items-center justify-center min-h-screen p-8 text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
  >
    <h1 class="mb-8 text-4xl font-extrabold">Velg en kategori 📚</h1>
    <div class="grid w-full max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      <CategoryCard
        title="Matte"
        description="Test dine matteferdigheter!"
        category="/category/matte"
      />
      <CategoryCard
        title="Geografi"
        description="Hvor godt kjenner du verden?"
        category="/category/geografi"
      />
      <CategoryCard
        title="Historie"
        description="Hva husker du fra historietimen?"
        category="/category/historie"
      />
      <CategoryCard
        title="Dyr"
        description="Hvor mye kan du om dyrenes verden?"
        category="/category/dyr"
      />
    </div>
  </div>
</template>

<script setup>
import CategoryCard from '../components/ui/CategoryCard.vue'
</script>
