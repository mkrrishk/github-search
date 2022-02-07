import axiosClient from '@/utils/axios'
import type { GitHubSearchResults } from '@/types/repo'

export const searchGitHubRepos = async (
  searchTerm: string
): Promise<GitHubSearchResults> => {
  return await axiosClient
    .get(`search/repositories?q=${searchTerm}`)
    .then((res) => res?.data?.items)
    .catch((error) =>
      console.log(`An Error Occured fetching GitHub Repos - ${error}`)
    )
}
