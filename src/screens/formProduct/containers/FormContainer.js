import Form from './../components/Form'
import { connect } from 'react-redux'
import { closeForm } from './../../../actions/editingProductType'

const mapStateToProps = (state) => ({
  editingProduct: state.editingProduct
})

const mapDispatchToProps = (dispatch) => ({
  closeForm: () => dispatch(closeForm())
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
