// Routes
import homeRouter from './Home'
import alloyRouter from './Alloy'
import tireRouter from './Tire'
import settingRouter from './Setting'

const mainRouter = [
  ...alloyRouter,
  ...tireRouter,
  ...settingRouter,
  ...homeRouter
]

export default mainRouter
