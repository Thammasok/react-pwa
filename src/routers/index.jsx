// Routes
import todoRouter from './Todo'
import authRouter from './Auth'
import homeRouter from './Home'

const mainRouter = [...todoRouter, ...homeRouter, ...authRouter]

export default mainRouter
