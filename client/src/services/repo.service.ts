import { gitHubClient, localClient } from '@/utils/axios'
import type {
  FavRepoResponse,
  GitHubSearchResults,
  Repository,
} from '@/types/repo'

export const searchGitHubRepos = async (
  searchTerm: string
): Promise<GitHubSearchResults> => {
  return await gitHubClient
    .get(`search/repositories?q=${searchTerm}`)
    .then((res) => res?.data?.items)
    .catch((error) =>
      console.log(`An Error Occured fetching GitHub Repos - ${error}`)
    )
}

export const saveFavouriteRepo = async (
  favRepo: Repository
): Promise<FavRepoResponse | Error> => {
  return await localClient
    .post('api/repos', favRepo)
    .then((res) => res?.data)
    .catch((error) =>
      console.log(`An Error Occured Saving Fav Repo - ${error}`)
    )
}
