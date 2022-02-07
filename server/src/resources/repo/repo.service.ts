import { Repositories } from './repo'

class RepoService {
  private repos: Repositories = []

  public async saveRepo(
    name: string,
    userName: string,
    size: string,
    downloadTime: string
  ): Promise<Repositories | Error> {
    try {
      //Check for Duplicate Entries
      const doesRepoExist = this.repos.some(
        (repo) => repo.name === name && repo.userName === userName
      )

      if (!doesRepoExist) {
        this.repos.push({
          name,
          userName,
          size,
          downloadTime,
        })
      }
      return this.repos
    } catch (error) {
      console.log(error)
      throw new Error('An Error Occured While Saving Repos')
    }
  }

  public async getRepos(): Promise<Repositories | Error> {
    try {
      return this.repos
    } catch (error) {
      console.log(error)
      throw new Error('An Error Occured while Fetching Repos')
    }
  }
}

export default RepoService
