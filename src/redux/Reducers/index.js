import { combineReducers } from 'redux'

import todo from './Todo'
import post from './Post'

export default combineReducers({
  post,
  todo
})
