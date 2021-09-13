// Views
import Tire from '../../views/Tire'

const homeRouter = [
  {
    path: '/tire',
    exact: true,
    isAuth: false,
    layout: 'main',
    component: Tire
  }
]

export default homeRouter
