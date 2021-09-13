// Constants
import {
  TODO_TASK_LISTS,
  TODO_TASK_ADD,
  TODO_TASK_COMPLETED
} from '../../Constants/Todo'

const todo = (state = {}, action) => {
  switch (action.type) {
    case TODO_TASK_LISTS:
      return {
        ...state,
        ...action.payload
      }
    case TODO_TASK_ADD:
      return {
        ...state,
        ...action.payload
      }
    case TODO_TASK_COMPLETED:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default todo
