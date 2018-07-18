import React, { Component } from 'react';
import './App.css';
import ListProductsContainer from './screens/listProducts/containers/ListProductsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListProductsContainer/>
      </div>
    );
  }
}

export default App;
