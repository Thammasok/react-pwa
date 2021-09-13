import { useDispatch } from 'react-redux'

import todoAction from '../../../actions/Todo'

const Task = ({ data }) => {
  const dispatch = useDispatch()

  const handleTaskCompleted = event => {
    dispatch(todoAction.SetTaskCompleted(event.target.value))
  }

  return (
    <li>
      <label htmlFor={`task-checkbox-${data}`}>
        <input
          id={`task-checkbox-${data}`}
          type="checkbox"
          onChange={handleTaskCompleted}
          value={data}
        />
        {data}
      </label>
    </li>
  )
}

export default Task
