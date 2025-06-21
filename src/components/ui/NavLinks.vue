<template>
  <div class="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-6 md:space-y-0">
    <!-- Hjem -->
    <router-link @click="onClick" to="/" class="font-semibold text-white hover:underline">
      Hjem
    </router-link>

    <!-- Kategorier med dropdown -->
    <div class="relative w-full text-center md:w-auto md:text-left">
      <button
        @click="toggleDropdown"
        class="flex items-center justify-center w-full space-x-1 font-semibold text-white hover:underline"
      >
        <span>Kategorier</span>
      </button>

      <!-- Dropdown-meny -->
      <div
        v-if="open"
        class="z-30 flex flex-col mt-2 space-y-2 text-center text-black bg-white md:absolute md:right-0 md:w-40 md:rounded md:shadow-lg md:bg-white md:p-2 md:text-left md:block"
      >
        <router-link
          v-for="category in categories"
          :key="category.path"
          :to="category.path"
          @click="handleDropdownClick"
          class="block px-4 py-2 rounded hover:bg-purple-100"
        >
          {{ category.label }}
        </router-link>
      </div>
    </div>

    <!-- Bruker -->
    <router-link @click="onClick" to="/account" class="font-semibold text-white hover:underline">
      Bruker
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  onClick: {
    type: Function,
    default: () => {},
  },
})

// Dropdown
const open = ref(false)
const toggleDropdown = () => (open.value = !open.value)
const closeDropdown = () => (open.value = false)

const handleDropdownClick = () => {
  closeDropdown()
  props.onClick() // Lukk mobilmenyen samtidig
}

// Kategorier
const categories = [
  { label: 'Matte', path: '/category/matte' },
  { label: 'Geografi', path: '/category/geografi' },
  { label: 'Historie', path: '/category/historie' },
  { label: 'Dyr', path: '/category/dyr' },
]

// Klikk utenfor for å lukke dropdown
const handleClickOutside = (e) => {
  if (!e.target.closest('.relative')) {
    closeDropdown()
  }
}

onMounted(() => document.addEventListener('click', handleClickOutside))
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside))
</script>
