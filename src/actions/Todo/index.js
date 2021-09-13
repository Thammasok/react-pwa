import {
  POST_CLEAR_DATA,
  POST_GET_FAIL,
  POST_GET_SUCCESS
} from '../../redux/Constants/Post'

// Redux Constants
import {
  TODO_TASK_ADD,
  TODO_TASK_COMPLETED,
  TODO_TASK_LISTS
} from '../../redux/Constants/Todo'

// Service
import postService from '../../services/Post'

// Utils
import handleResponse from '../../utils/Response'

const todoAction = {
  GetTaskLists: () => async (dispatch, getState) => {
    const { todo } = getState()
    dispatch({
      type: TODO_TASK_LISTS,
      payload: {
        lists: todo.lists || []
      }
    })
  },
  SetNewTask: task => async (dispatch, getState) => {
    const { todo } = getState()
    dispatch({
      type: TODO_TASK_ADD,
      payload: {
        lists: todo.lists ? todo.lists.concat(task) : [task]
      }
    })
  },
  SetTaskCompleted: task => async (dispatch, getState) => {
    const { todo } = getState()
    const todoLists = todo.lists
    const index = todoLists.indexOf(task)
    if (index > -1) {
      todoLists.splice(index, 1)
    }

    dispatch({
      type: TODO_TASK_COMPLETED,
      payload: {
        lists: todoLists
      }
    })
  },
  GetPostList: () => async dispatch => {
    // Clear data of example in Redux
    dispatch({
      type: POST_CLEAR_DATA
    })

    const response = await postService.GetPostLists()
    if (response.status === 200) {
      handleResponse.Success({
        type: POST_GET_SUCCESS,
        dispatch,
        payload: response
      })
    } else {
      handleResponse.Error({
        type: POST_GET_FAIL,
        errorPage: true,
        dispatch,
        error: response.error
      })
    }
  }
}

export default todoAction
