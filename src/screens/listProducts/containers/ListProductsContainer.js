import { connect } from 'react-redux'
import ListProductsScreen from './../components/ListProductsScreen'
import { deleteProduct } from './../../../actions/productsType'

const mapStateToProps = (state) => {
  return {
    listProducts: state.products.list
  }
}

const mapDispatchToProps = dispatch => ({
  deleteProduct: (id) => dispatch(deleteProduct(id))
})

const ListProductsContainer = connect(mapStateToProps, mapDispatchToProps)(ListProductsScreen)
export default ListProductsContainer
