import 'module-alias/register'
import App from './app'
import UserController from '@/resources/repo/repo.controller'

const app = new App([new UserController()], Number(process.env.PORT || 3001))

app.listen()
