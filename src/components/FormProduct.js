import React from 'react'
import Button from './Button'

const FormProduct = (props) => {
  return (
    <div>
      <p>Opened form</p>
      <Button nameBtn='back' onClickBtn={props.backProducts} />
    </div>
  )
}

export default FormProduct
