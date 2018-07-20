const initialState = {
  list: [{
    id: 0,
    name: 'Laptop',
    price: 20,
    rating: 5
  }, {
    id: 1,
    name: 'Mouse',
    price: 10,
    rating: 4,
  }, {
    id: 2,
    name: 'Keyboard',
    price: 12,
    rating: 3
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
