<template>
  <div
    @click="goToCategory"
    class="p-6 text-center transition-transform duration-300 bg-white rounded-lg shadow-md cursor-pointer hover:scale-105"
  >
    <h2 class="mb-2 text-xl font-bold">{{ title }}</h2>
    <p class="text-sm text-gray-600">{{ description }}</p>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  title: String,
  description: String,
  category: String,
})

const router = useRouter()

const goToCategory = () => {
  router.push(props.category)
}
</script>
