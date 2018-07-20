import { combineReducers } from 'redux'
import productsReducer from './productsReducer'
import editingProductReducer from './editingProductReducer'

const reducers = combineReducers({
  products: productsReducer,
  editingProduct: editingProductReducer
})

export default reducers
