<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<script setup lang="ts">
import {
  HeartIcon as HeartIconSolid,
  UserIcon,
  FolderIcon,
  DownloadIcon,
} from '@heroicons/vue/solid'
import { HeartIcon as HeartIconOutline } from '@heroicons/vue/outline'
import type { Repositories } from '@/types/repo' // had to add type due to https://github.com/vitejs/vite/issues/2117

defineEmits<{
  (event: 'on-favourite', index: number): void
}>()
</script>

<template>
  <div class="overflow-y-auto">
    <ul class="flex flex-col gap-4">
      <li
        v-for="(repo, index) in $attrs.repos as Repositories"
        :key="index"
        class="flex flex-col gap-4 rounded-lg border border-gray-300/50 p-4 shadow-sm"
      >
        <div class="flex items-center justify-between">
          <div class="truncate text-lg font-semibold">{{ repo.name }}</div>
          <HeartIconSolid
            v-if="repo.isFavourite"
            class="h-6 w-6 cursor-pointer text-blue-500"
            @click="$emit('on-favourite', index)"
          />
          <HeartIconOutline
            v-else
            class="h-6 w-6 cursor-pointer text-blue-500"
            @click="$emit('on-favourite', index)"
          />
        </div>
        <div class="grid grid-flow-row gap-2 md:grid-flow-col md:grid-cols-2">
          <div class="col-span-[1.5] flex items-center gap-2">
            <UserIcon class="h-4 w-4 text-gray-400" />
            <div class="truncate text-sm font-medium">{{ repo.userName }}</div>
          </div>
          <div class="flex items-center gap-2">
            <FolderIcon class="h-4 w-4 text-gray-400" />
            <div class="text-sm font-medium">{{ repo.size }}</div>
          </div>
          <div class="flex items-center gap-2">
            <DownloadIcon class="h-4 w-4 text-gray-400" />
            <div class="text-sm font-medium">{{ repo.downloadTime }}</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
