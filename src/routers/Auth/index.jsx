// Views
import Home from '../../views/Home'

const authRouter = [
  {
    path: '/login',
    exact: true,
    isAuth: false,
    layout: 'full',
    component: Home
  },
  {
    path: '/register',
    exact: true,
    isAuth: false,
    layout: 'full',
    component: Home
  }
]

export default authRouter
