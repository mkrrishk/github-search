import express, { Application } from 'express'
import Controller from '@/utils/Controller'

class App {
  public express: Application
  public port: number

  constructor(controllers: Controller[], port: number) {
    this.express = express()
    this.port = port

    this.initialiseMiddleware()
    this.initialiseControllers(controllers)
  }

  private initialiseMiddleware(): void {
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: false }))
  }

  private initialiseControllers(controllers: Controller[]): void {
    controllers.forEach((controller: Controller) => {
      this.express.use('/api', controller.router)
    })
  }

  public listen(): void {
    this.express.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`)
    })
  }
}

export default App
