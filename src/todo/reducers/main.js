import { combineReducers } from 'redux'
import { todosReducer } from './todosReducer'
import {filterReducer} from './filterReducer'

export const reducers = combineReducers({
  todos: todosReducer,
  filter: filterReducer
})
