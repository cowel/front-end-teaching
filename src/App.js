import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Selector from './components/Selector'
import products from './data/products'
import Products from './components/Products'
import TextInput from './components/TextInput'

// Stateful component
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: products
    }
  }

  renderProducts = () => (
    this.state.products.map(product => (
      <div key={product.id}>
        <h2>{product.name}</h2>
        <p style={{color: 'red'}}>{product.price} d</p>
      </div>
    ))
  )

  filterProducts = (value) => {
    let filteredProducts = value === 'all' ? products : products.filter(pro => pro.price >= value)
    this.setState({ products: filteredProducts })   
  }

  filterByName = (name) => {
    let filteredProducts = products.filter(product => product.name.includes(name))
    this.setState({ products: filteredProducts })   
  }

  render() {
    return (
      <div className="App">
        <TextInput filterText={this.filterByName}/>
        <Selector filter={this.filterProducts}/>
        <Products products={this.state.products} />
      </div>
    );
  }
}

export default App;
