// Routes
import homeRouter from './Home'
import alloyRouter from './Alloy'
import reportRouter from './Report'
import tireRouter from './Tire'
import settingRouter from './Setting'

const mainRouter = [
  ...alloyRouter,
  ...tireRouter,
  ...reportRouter,
  ...settingRouter,
  ...homeRouter
]

export default mainRouter
