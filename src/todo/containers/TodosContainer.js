import Todos from './../components/Todos'
import { connect } from 'react-redux'
import { addTodoAction, deleteTodoAction, toggleTodoAction } from './../actions/todoAction'
import { filterTodosAction } from './../actions/filterAction'

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
  list: filterTodo(state.todos.list, state.filter),
  name: ownProps.name
})

const mapDispatchToProps = (dispatch) => ({
  addTodo: (text) => dispatch(addTodoAction(text)),
  deleteTodo: (id) => dispatch(deleteTodoAction(id)),
  toggleTodo: (id) => dispatch(toggleTodoAction(id)),
  filterTodos: (filter) => dispatch(filterTodosAction(filter))
})

const TodosContainer = connect(mapStateToProps, mapDispatchToProps)(Todos)
export default TodosContainer
