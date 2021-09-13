import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// Actions
import todoAction from '../../actions/Todo'

// Components
import Task from './Task'
import Post from './Post'

const TodoPage = () => {
  const dispatch = useDispatch()
  const todo = useSelector(state => state.todo)
  const post = useSelector(state => state.post)

  const [newTask, setNewTask] = useState('')

  const handleForm = event => {
    event.preventDefault()
    dispatch(todoAction.SetNewTask(newTask))
    setNewTask('')
  }

  useEffect(() => {
    const loadTodoLists = () => {
      dispatch(todoAction.GetTaskLists())
      dispatch(todoAction.GetPostList())
    }
    loadTodoLists()
  }, [dispatch])

  return (
    <div>
      <div>
        <h2>Todo</h2>
        <form onSubmit={handleForm}>
          <input
            type="text"
            placeholder="Enter your new task."
            value={newTask}
            onChange={event => setNewTask(event.target.value)}
          />
        </form>
        <hr />
        <h3>Todo Lists</h3>
        <ul>
          {todo
            ? todo.lists?.map(data => (
                <Task key={(Math.random() * 10).toString()} data={data} />
              ))
            : null}
        </ul>
      </div>

      <div>
        <h2>Post Lists</h2>
        <ul>
          {post ? (
            post.lists?.map(data => (
              <Post key={data.id.toString()} data={data} />
            ))
          ) : (
            <li>No data.</li>
          )}
        </ul>
      </div>
    </div>
  )
}

export default TodoPage
