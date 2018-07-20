const editingProductReducer = (state = null, action) => {
  switch (action.type) {
    case 'HANDLE_OPEN_FORM':
      return {
        ...state,
        ...action.product
      }
    case 'CLOSE_FORM':
      return null
    default:
      return state
  }
}

export default editingProductReducer
