import React from 'react'
import './styles/ProductItemStyles.css'
import Button from './../../../common/Button'


const ProductItem = (props) => {
  return (
    <div className='group-product'>
      <div className='product-info'>
        <h3 className='text'>{props.name}</h3>
        <p className='text'>{props.price}</p>
      </div>
      <div className='group-btn'>
        <Button nameBtn='edit' onClickBtn={props.onClickEdit}/>
        <Button nameBtn='delete' onClickBtn={props.onClickDelete}/>
      </div>
    </div>
  )
}

export default ProductItem
