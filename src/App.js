import React, { Component } from 'react';
import './App.css';
import ListProductsContainer from './screens/listProducts/containers/ListProductsContainer'
import FormContainer from './screens/formProduct/containers/FormContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormContainer />
        <ListProductsContainer />
      </div>
    );
  }
}

export default App;
