interface GithubSearchOwner {
  login: string
}

export interface GitHubSearchResult {
  name: string
  owner: GithubSearchOwner
  size: number
}

export type GitHubSearchResults = GitHubSearchResult[]

export interface Repository {
  name: string
  userName: string
  size: string
  downloadTime: string
  isFavourite: boolean
}

export type Repositories = Repository[]

export interface FavRepoResponse {
  status: string
  message: string
}
