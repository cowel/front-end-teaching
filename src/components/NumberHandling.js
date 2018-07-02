import React, { Component } from 'react'

class NumberHandling extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0
    }
  }

  clickUp = (number) => {
    const value = this.state.value
    this.setState({ value: value + number })
  }

  clickDown = (number) => {
    this.setState((preState) => ({ value: (preState.value - number) < 0 ? 0 : preState.value - number}))
  }

  render () {
    return (
      <div>
        <button onClick={() => this.clickUp(4)} type='button'>+</button>
        <label>{this.state.value}</label>
        <button onClick={() => this.clickDown(6)}  type='button'>-</button>
      </div>
    )
  }
}

export default NumberHandling
