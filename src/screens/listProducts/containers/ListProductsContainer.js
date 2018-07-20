import { connect } from 'react-redux'
import ListProductsScreen from './../components/ListProductsScreen'
import { deleteProduct } from './../../../actions/productsType'
import { handleOpenForm } from './../../../actions/editingProductType'

const mapStateToProps = (state, ownProps) => {
  return {
    listProducts: state.products.list,
    editingProduct: state.editingProduct
  }
}

const mapDispatchToProps = dispatch => ({
  deleteProduct: (id) => dispatch(deleteProduct(id)),
  handleOpenForm: (product) => dispatch(handleOpenForm(product))
})

const ListProductsContainer = connect(mapStateToProps, mapDispatchToProps)(ListProductsScreen)
export default ListProductsContainer
