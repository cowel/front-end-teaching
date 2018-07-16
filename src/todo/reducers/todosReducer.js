const initialState = {
  list: [{id: 1, text: 'Nothing 2', isCompleted: false}]
}
export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
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
    default:
      return state
  }
}
