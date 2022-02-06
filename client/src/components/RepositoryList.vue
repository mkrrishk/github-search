<script setup lang="ts">
import {
  HeartIcon,
  UserIcon,
  FolderIcon,
  DownloadIcon,
} from '@heroicons/vue/solid'
</script>

<template>
  <div class="overflow-y-auto">
    <ul class="flex flex-col gap-4">
      <li
        v-for="index in 10"
        :key="index"
        class="flex flex-col gap-4 rounded-lg border border-gray-300/50 p-4 shadow-sm"
      >
        <div class="flex items-center justify-between">
          <div class="text-lg font-semibold">Tetris</div>
          <HeartIcon class="h-6 w-6 cursor-pointer text-blue-500" />
        </div>
        <div
          class="grid grid-flow-row place-content-between gap-2 md:grid-flow-col"
        >
          <div class="flex items-center gap-2">
            <UserIcon class="h-4 w-4 text-gray-400" />
            <div class="text-sm font-medium">User</div>
          </div>
          <div class="flex items-center gap-2">
            <FolderIcon class="h-4 w-4 text-gray-400" />
            <div class="text-sm font-medium">10 MB</div>
          </div>
          <div class="flex items-center gap-2">
            <DownloadIcon class="h-4 w-4 text-gray-400" />
            <div class="text-sm font-medium">5 Mins</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
