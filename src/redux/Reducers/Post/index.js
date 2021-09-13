// Constants
import {
  POST_CLEAR_DATA,
  POST_GET_FAIL,
  POST_GET_SUCCESS
} from '../../Constants/Post'

const post = (state = {}, action) => {
  switch (action.type) {
    case POST_GET_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case POST_GET_FAIL:
      return {
        ...state,
        ...action.payload
      }
    case POST_CLEAR_DATA:
      return {}
    default:
      return state
  }
}

export default post
