export const deleteProduct = (id) => ({
  type: 'DELETE_PRODUCT',
  id
})

export const editProduct = (product) => ({
  type: 'EDIT_PRODUCT',
  product
})

export const onRating = (point, id) => ({
  type: 'ON_RATING',
  point,
  id
})
