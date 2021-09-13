// Views
import Todo from '../../views/Todo'

const todoRouter = [
  {
    path: '/todo',
    exact: true,
    isAuth: false,
    layout: 'main',
    component: Todo
  }
]

export default todoRouter
