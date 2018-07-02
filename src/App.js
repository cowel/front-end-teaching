import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Intro from './Intro'
import NumberHandling from './components/NumberHandling'


// Stateful component
class App extends Component {

  render() {
    console.log('App state ', this.state)
    return (
      <div className="App">
        
        {/* Render header */}
        <Header name='Hoai' job='Developer' />

        {/* Render up down number */}
        <NumberHandling />

        {/* Render intro */}
        <Intro ratio='5-1'/>
      </div>
    );
  }
}

export default App;
