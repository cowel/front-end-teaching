import Form from './../components/Form'
import { connect } from 'react-redux'
import { closeForm, onChangeProduct } from './../../../actions/editingProductType'
import { editProduct } from './../../../actions/productsType'

const mapStateToProps = (state) => ({
  editingProduct: state.editingProduct
})

const mapDispatchToProps = (dispatch) => ({
  closeForm: () => dispatch(closeForm()),
  onChangeProduct: (productProperty, text) => dispatch(onChangeProduct(productProperty, text)),
  handleEdit: (product) => dispatch(editProduct(product))
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
