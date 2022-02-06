<script setup lang="ts">
import RepositoryList from '@/components/RepositoryList.vue'
import SearchInput from '@/components/SearchInput.vue'
import { ref } from 'vue'

const search = ref('Tetris')
const onSearch = (search: string): void => {
  console.log('onSearch', search) // use this to make new API Call
}
</script>

<template>
  <div
    class="my-12 mx-auto flex max-h-[calc(100vh-6rem)] max-w-md flex-col gap-4 divide-y divide-gray-300/50 rounded-lg border border-gray-300/50 bg-white p-4 shadow-xl"
  >
    <h2 class="self-center text-2xl font-semibold tracking-wide">
      GitHub Search
    </h2>
    <div class="flex flex-col gap-6 overflow-hidden p-4">
      <SearchInput :search="search" @on-search="onSearch" />
      <RepositoryList />
    </div>
  </div>
</template>
