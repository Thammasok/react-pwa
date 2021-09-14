// Views
import Setting from '../../views/Setting'

const todoRouter = [
  {
    path: '/setting/:active',
    exact: false,
    isAuth: false,
    layout: 'main',
    component: Setting
  }
]

export default todoRouter
