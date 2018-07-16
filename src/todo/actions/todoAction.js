export const addTodoAction = (text) => ({
  type: 'ADD_TODO',
  text
})

export const deleteTodoAction = (id) => ({
  type: 'DELETE_TODO',
  id
})

export const toggleTodoAction = (id) => ({
  type: 'TOGGLE_TODO',
  id
})
