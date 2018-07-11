// Libs
import React, { Component } from 'react'

// Styles
import './App.css'

// Component 
import Button from './components/Button'

const increase = {
  type: 'INCREASE',
  value: 5 
}

// Stateful component
class App extends Component {  
  render() {
    const store = this.props.store
    console.log('state ', this.props.store.getState())
    return (
      <div className="App">
        <label>Clicked <span>{this.props.store.getState()}</span></label>
        <Button 
          nameBtn={'+'}
          onClickBtn={() => store.dispatch(increase)}
        />
        <Button 
          nameBtn={'-'}
          onClickBtn={() => {}}
        />
      </div>
    );
  }
}

export default App;
