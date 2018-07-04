import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Intro from './Intro'
import NumberHandling from './components/NumberHandling'
import Selector from './components/Selector'
import Form from './components/Form'

// Stateful component
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: this.props.initApp
    }
    console.log('constructor')
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('nextState ', nextState)
    console.log('this.props.initApp ', this.props.initApp)
    return nextState.value !== this.props.initApp
  }

  componentWillMount() {
    console.log('componentWillMount')
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  onChange = (event) => {
    this.setState({value: event.target.value})
  }


  render() {
    console.log('render')
    return (
      <div className="App">
        
        {/* Render header */}
        <Header name={this.state.value} job='Developer' />
        <input 
          value={this.state.value}
          onChange={this.onChange}
        />

        {/* Render up down number */}
        <NumberHandling />

        {/* Render intro */}
        <Intro ratio='5-1'/>

        <Selector />
        <Form />
      </div>
    );
  }
}

export default App;
