// Views
import Home from '../../views/Home'

const homeRouter = [
  { path: '/', exact: true, isAuth: false, layout: 'main', component: Home }
]

export default homeRouter
