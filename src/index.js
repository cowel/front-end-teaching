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
    default:
      return state
  }
}

const mapStateToProps = (state, ownProps) => ({
  list: state.todos.list,
  name: ownProps.name
})

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodoAction(text)),
  deleteTodo: (id) => dispatch(deleteTodoAction(id))
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

