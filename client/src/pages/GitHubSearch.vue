<script setup lang="ts">
import RepositoryList from '@/components/RepositoryList.vue'
import SearchInput from '@/components/SearchInput.vue'
import { useRepoStore } from '@/stores/repo.store'

const repoStore = useRepoStore()
repoStore.getRepos()

const onSearch = (searchTerm: string): void => {
  repoStore.searchTerm = searchTerm
  repoStore.getRepos()
}

const onFavourite = (updatedIndex: number): void => {
  repoStore.toggleFavourite(updatedIndex)
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
      <SearchInput :search="repoStore.searchTerm" @on-search="onSearch" />
      <RepositoryList :repos="repoStore.repos" @on-favourite="onFavourite" />
    </div>
  </div>
</template>
