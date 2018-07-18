import React, { Component } from 'react';
import ProductItem from './ProductItem'

export default class ListProductsScreen extends Component {
  
  renderListProducts = () => {
    return this.props.listProducts.map(item => (
      <ProductItem
        key={item.id}
        name={item.name}
        price={item.price}
        onClickDelete={() => this.props.deleteProduct(item.id)}
      />
    ))
  }
  
  render() {
    console.log('this.props ', this.props)
    return (
      <div>
        {this.renderListProducts()}
      </div>
    )
  }
}
