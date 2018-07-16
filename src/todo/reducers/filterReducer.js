export const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'FILTER_TODOS':
      return action.filter
    default:
      return state
  }
}
