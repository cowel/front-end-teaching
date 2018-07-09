import React, { Component } from 'react'
import Button from './Button'
import TextInput from './TextInput'

class FormProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: null,
      name: '',
      price: 0,
      rating: 0
    }
  }

  changeText = (value, type) => {
    this.setState({ [type]: value })
  }



  renderInput = () => {
    const inputs = [{
      label: 'Name',
      value: this.state.name,
      onChangeText: (value) => this.changeText(value, 'name')
    }, {
      label: 'Price',
      value: this.state.price,
      onChangeText: (value) => this.changeText(value, 'price')
    }, {
      label: 'Rating',
      value: this.state.rating,
      onChangeText: (value) => this.changeText(value, 'rating')
    }]

    return (
      inputs.map(input => (
        <div key={input.label}>
          <span>{input.label}</span>
          <TextInput value={input.value} onChangeText={input.onChangeText}/>
        </div>
      ))
    )
  }

  render() {
    return (
      <div style={{marginTop: 100}}>
        {this.renderInput()}
        <Button nameBtn='Save' onClickBtn={() => this.props.saveProduct(this.state)} />
        <Button nameBtn='Back' onClickBtn={this.props.backProducts} />
      </div>
    )
  }
  
}

export default FormProduct
