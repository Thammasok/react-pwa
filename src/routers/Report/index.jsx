// Views
import Report from '../../views/Report'

const reportRouter = [
  {
    path: '/report',
    exact: true,
    isAuth: false,
    layout: 'main',
    component: Report
  }
]

export default reportRouter
