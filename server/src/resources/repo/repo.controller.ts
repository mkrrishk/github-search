import { Router, Request, Response, NextFunction } from 'express'
import Controller from '@/utils/Controller'
import HttpException from '@/utils/http.exception'
import UserService from '@/resources/repo/repo.service'

class RepoController implements Controller {
  public path = '/repos'
  public router = Router()
  private UserService = new UserService()

  constructor() {
    this.initialiseRoutes()
  }

  private initialiseRoutes(): void {
    this.router.post(`${this.path}`, this.saveRepo)
    this.router.get(`${this.path}`, this.getRepos)
  }

  private saveRepo = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const { name, userName, size, downloadTime } = req.body

      await this.UserService.saveRepo(name, userName, size, downloadTime)

      res.status(201).json({ status: 201, message: 'Success' })
    } catch (error) {
      next(new HttpException(400, 'An Error Occured'))
    }
  }

  private getRepos = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const repos = await this.UserService.getRepos()

      res.status(200).json({ status: 200, message: 'Success', data: repos })
    } catch (error) {
      next(new HttpException(400, 'An Error Occured'))
    }
  }
}

export default RepoController
