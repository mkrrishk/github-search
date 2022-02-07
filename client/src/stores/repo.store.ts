import { defineStore } from 'pinia'
import type { Repositories, Repository } from '@/types/repo' // had to add type due to https://github.com/vitejs/vite/issues/2117
import { saveFavouriteRepo, searchGitHubRepos } from '@/services/repo.service'
import { calculateDownloadTime } from '@/utils/utils'

export const useRepoStore = defineStore('repo', {
  state: () => ({
    searchTerm: 'Tetris',
    repos: [] as Repositories,
  }),
  actions: {
    async getRepos() {
      const gitHubRepos = await searchGitHubRepos(this.searchTerm)
      this.repos = gitHubRepos.map((repo) => {
        return {
          name: repo.name,
          userName: repo.owner.login,
          size: `${(repo.size * 0.001).toFixed(2)} MB`,
          downloadTime: calculateDownloadTime(repo.size),
          isFavourite: false,
        } as Repository
      })
    },
    toggleFavourite(index: number) {
      const { isFavourite } = this.repos[index]
      if (!isFavourite) {
        saveFavouriteRepo(this.repos[index])
      }
      this.repos[index].isFavourite = !isFavourite
    },
  },
})
