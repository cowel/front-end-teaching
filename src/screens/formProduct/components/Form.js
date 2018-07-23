import React, { Component } from 'react'
import TextInput from './../../../common/TextInput'
import Button from './../../../common/Button'

class Form extends Component {

  renderInput = () => {
    const { editingProduct, onChangeProduct } = this.props
    const inputs = [{
      label: 'Name',
      onChange: (text) => onChangeProduct('name', text),
      value: editingProduct.name
    }, {
      label: 'Price',
      onChange: (text) => onChangeProduct('price', text),
      value: editingProduct.price
    }, {
      label: 'Rating',
      onChange: (text) => onChangeProduct('rating', text),
      value: editingProduct.rating
    }]

    return inputs.map((input, index) => (
      <TextInput 
        key={index}
        label={input.label}
        value={input.value}
        onChangeText={input.onChange}
      />
    ))
  }

  render() {
    const { editingProduct, handleEdit, closeForm } = this.props
    console.log('Form this.props ', this.props)
    if(editingProduct) {
      return (
        <div>
          {this.renderInput()}
          <Button 
            nameBtn='Edit'
            onClickBtn={() => {
              handleEdit(editingProduct)
              closeForm()
            }}
          />
          <Button 
            nameBtn='Cancel'
            onClickBtn={() => closeForm()}
          />
        </div>
      )
    }
    return null
  }
}

export default Form
