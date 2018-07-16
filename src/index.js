import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import { combineReducers } from 'redux'

const addTodoAction = (text) => ({
  type: 'ADD_TODO',
  text
})

const deleteTodoAction = (id) => ({
  type: 'DELETE_TODO',
  id
})

const toggleTodoAction = (id) => ({
  type: 'TOGGLE_TODO',
  id
})

const filterTodosAction = (filter) => ({
  type: 'FILTER_TODOS',
  filter
})

const initialState = {
  list: [{id: 1, text: 'Nothing 2', isCompleted: false}]
}

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('action ', action)
      return {
        list: [{
            id: new Date().valueOf(),
            text: action.text,
            isCompleted: false
          },
          ...state.list
        ]
      }

    case 'DELETE_TODO':
      return {
        list: state.list.filter(todo => todo.id !== action.id)
      }
    case 'TOGGLE_TODO':
      return {
        list: state.list.map(todo => todo.id === action.id ?
          {
            ...todo,
            isCompleted: !todo.isCompleted
          } : 
          todo
        )
      }
    case 'FILTER_TODOS':
      return {
        ...state,
        filter: action.filter
      }
    default:
      return state
  }
}

const filterTodo = (todos, filter) => {
  switch (filter) {
    case 'ACTIVE':
      return todos.filter(todo => todo.isCompleted === false)
    case 'COMPLETED':
      return todos.filter(todo => todo.isCompleted === true)
    default:
      return todos
  }
}

const mapStateToProps = (state, ownProps) => ({
  list: filterTodo(state.todos.list, state.todos.filter),
  name: ownProps.name
})

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodoAction(text)),
  deleteTodo: (id) => dispatch(deleteTodoAction(id)),
  toggleTodo: (id) => dispatch(toggleTodoAction(id)),
  filterTodos: (filter) => dispatch(filterTodosAction(filter))
})

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)

const reducers = combineReducers({
  todos: todosReducer
})

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={store}>
    <AppContainer name={'abc'}/>
  </Provider>, 
  document.getElementById('root')
);

