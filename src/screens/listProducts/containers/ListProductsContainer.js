import { connect } from 'react-redux'
import ListProductsScreen from './../components/ListProductsScreen'
import { deleteProduct, onRating } from './../../../actions/productsType'
import { handleOpenForm } from './../../../actions/editingProductType'

const mapStateToProps = (state, ownProps) => {
  return {
    listProducts: state.products.list,
    editingProduct: state.editingProduct
  }
}

const mapDispatchToProps = dispatch => ({
  deleteProduct: (id) => dispatch(deleteProduct(id)),
  handleOpenForm: (product) => dispatch(handleOpenForm(product)),
  onRating: (point, id) => dispatch(onRating(point, id))
})

const ListProductsContainer = connect(mapStateToProps, mapDispatchToProps)(ListProductsScreen)
export default ListProductsContainer
