const initialState = {
  list: [{
    id: 0,
    name: 'Laptop',
    price: 20
  }, {
    id: 1,
    name: 'Mouse',
    price: 10
  }, {
    id: 2,
    name: 'Keyboard',
    price: 12
  }]
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE_PRODUCT':
      return {
        ...state,
        list: state.list.filter(product => product.id !== action.id)
      }
    default:
      return state
  }
}

export default productsReducer
