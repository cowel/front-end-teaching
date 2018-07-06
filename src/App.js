import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Selector from './components/Selector'
import products from './data/products'

// Stateful component
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      number: 3,
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

  render() {
    return (
      <div className="App">
        
        {/* Render number */}
        <Header />
        <Selector filter={this.filterProducts}/>
        {this.renderProducts()}
      </div>
    );
  }
}

export default App;
