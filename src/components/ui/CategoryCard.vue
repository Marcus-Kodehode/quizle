<template>
  <div
    @click="goToCategory"
    class="cursor-pointer bg-white rounded-lg shadow-md p-6 text-center hover:scale-105 transition-transform duration-300"
  >
    <h2 class="text-xl font-bold mb-2">{{ title }}</h2>
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
  router.push(`/quiz/${props.category}`)
}
</script>
