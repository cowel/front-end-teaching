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

    return inputs.map(input => (
      <TextInput 
        label={input.label}
        value={input.value}
        onChangeText={input.onChange}
      />
    ))
  }

  render() {
    console.log('Form this.props ', this.props)
    if(this.props.editingProduct) {
      return (
        <div>
          {this.renderInput()}
          <Button 
            nameBtn='Edit'
            onClickBtn={() => {}}
          />
          <Button 
            nameBtn='Cancel'
            onClickBtn={() => this.props.closeForm()}
          />
        </div>
      )
    }
    return null
  }
}

export default Form
