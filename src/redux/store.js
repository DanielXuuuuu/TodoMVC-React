import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import todoApp from "./reducers";

export const store = createStore(
  todoApp,
  applyMiddleware(
    thunkMiddleware
  )
)
