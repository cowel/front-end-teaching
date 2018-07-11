// Libs
import React, { Component } from 'react'

// Styles
import './../App.css'

// Components
import Selector from './../components/Selector'
import products from './../data/products'
import Products from './../components/Products'
import TextInput from './../components/TextInput'
import FormProduct from './../components/FormProduct'
import Button from './../components/Button'

// Stateful component
class ProductHandling extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: products,
      isOpenForm: false,
      editingProduct: {
        id: null,
        name: '',
        price: 0,
        rating: 0
      }
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

  handleForm = (isOpen) => {
    this.setState({ isOpenForm: isOpen })
  }

  saveProduct = (product) => {
    let products = this.state.products
    const index = products.findIndex(pro => pro.id === product.id)
    if(index >= 0) {
      products[index] = product
      this.setState({ products })
    }
    else {
      product.id = new Date().valueOf()
      this.setState(preState => ({
        products: [product, ...preState.products]
      }))
    }
    this.handleForm(false)
  }

  onClickEdit = (product) => {
    this.setState({editingProduct: product})
    this.handleForm(true)
  }

  render() {
    return (
      <div className="App">
        {
          this.state.isOpenForm ? 
            <FormProduct 
              backProducts={() => this.handleForm(false)}
              saveProduct={this.saveProduct}
              editingProduct={this.state.editingProduct}
            /> :
            <div>
              <Button nameBtn='+' onClickBtn={() => this.handleForm(true)} />
              <TextInput onChangeText={(name) => this.filterByName(name)}/>
              <Selector filter={(value) => this.filterProducts(value)}/>
              <Products 
                products={this.state.products}
                onClickEdit={(product) => this.onClickEdit(product)}
              />
            </div>
        }
      </div>
    );
  }
}

export default ProductHandling;
