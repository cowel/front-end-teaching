// Libs
import React, { Component } from 'react'

// Styles
import './App.css'

// Components
import Selector from './components/Selector'
import products from './data/products'
import Products from './components/Products'
import TextInput from './components/TextInput'
import FormProduct from './components/FormProduct'
import Button from './components/Button'

// Stateful component
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: products,
      isOpenForm: false
    }
  }

  filterProducts = (value) => {
    let filteredProducts = value === 'all' ? products : products.filter(pro => pro.price >= value)
    this.setState({ products: filteredProducts })   
  }

  filterByName = (name) => {
    let filteredProducts = products.filter(product => product.name.includes(name))
    this.setState({ products: filteredProducts })   
  }

  openForm = () => {
    this.setState({ isOpenForm: true })
  }

  closeForm = () => {
    this.setState({ isOpenForm: false })
  }

  render() {
    return (
      <div className="App">
        {
          this.state.isOpenForm ? 
            <FormProduct backProducts={this.closeForm}/> :
            <div>
              <Button nameBtn='+' onClickBtn={this.openForm} />
              <TextInput onChangeText={(name) => this.filterByName(name)}/>
              <Selector filter={(value) => this.filterProducts(value)}/>
              <Products products={this.state.products} />
            </div>
        }
      </div>
    );
  }
}

export default App;
