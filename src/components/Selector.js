import React, { Component } from 'react'

class Selector extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 'react'
    }
  }

  selecting = (event) => {
    this.setState({value: event.target.value})
  }

  renderOption = () => {
    const data = [{
      value: 'react',
      text: 'React'
    }, {
      value: 'reactNative',
      text: 'React Native'
    }, {
      value: 'angular',
      text: 'Angular2'
    }]

    return (
      data.map(option => <option key={option.value} value={option.value}>{option.text}</option>)
    )
  }

  render () {
    return (
      <div>
        <select onChange={this.selecting}>
          {this.renderOption()}
        </select>
        <label>{this.state.value}</label>
      </div>
    )
  }
}

export default Selector
