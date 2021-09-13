// Views
import Setting from '../../views/Setting'

const todoRouter = [
  {
    path: '/setting',
    exact: false,
    isAuth: false,
    layout: 'main',
    component: Setting
  }
]

export default todoRouter
