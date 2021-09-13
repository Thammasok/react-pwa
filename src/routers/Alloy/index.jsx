// Views
import Alloy from '../../views/Alloy'

const homeRouter = [
  {
    path: '/alloy',
    exact: true,
    isAuth: false,
    layout: 'main',
    component: Alloy
  }
]

export default homeRouter
