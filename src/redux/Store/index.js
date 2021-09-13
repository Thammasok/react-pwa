import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

// Reducers
import rootReducer from '../Reducers'

export default function configStore(initial = {}) {
  let middlewares = []
  if (process.env.REACT_APP_RUN_ON === 'production') {
    middlewares = [thunkMiddleware]
  } else {
    middlewares = [thunkMiddleware, createLogger()]
  }

  const store = createStore(
    rootReducer,
    initial,
    compose(applyMiddleware(...middlewares))
  )

  return store
}
