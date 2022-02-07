<script setup lang="ts">
import { ref } from 'vue'
import { debouncedWatch } from '@vueuse/core'

const props = defineProps({
  search: {
    type: String,
    default: 'Tetris',
  },
})

const emit = defineEmits<{
  (event: 'on-search', searchTerm: string): void
}>()

const searchValue = ref(props.search)
debouncedWatch(
  searchValue,
  async (newValue) => {
    emit('on-search', newValue)
  },
  { debounce: 1000 }
)
</script>

<template>
  <div>
    <label for="search" class="sr-only">Search</label>
    <input
      id="search"
      v-model="searchValue"
      type="search"
      name="search"
      placeholder="Search Repository"
      class="w-full rounded-lg border border-gray-300/50 bg-white py-2 px-4 text-gray-800 placeholder-gray-400 caret-blue-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
</template>
