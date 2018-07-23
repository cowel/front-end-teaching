export const handleOpenForm = (product) => ({
  type: 'HANDLE_OPEN_FORM',
  product
})

export const closeForm = () => ({
  type: 'CLOSE_FORM'
})

export const onChangeProduct = (productProperty, text) => ({
  type: 'ON_CHANGE_PRODUCT',
  productProperty,
  text
})
