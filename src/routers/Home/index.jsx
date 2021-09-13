// Views
import Home from '../../views/Home'

const homeRouter = [
  { path: '/', exact: true, isAuth: true, layout: 'main', component: Home }
]

export default homeRouter
