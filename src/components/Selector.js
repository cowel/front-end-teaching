import React, { Component } from 'react'

class Selector extends Component {
  renderOption = () => {
    const data = [{
      value: 'all',
      text: 'All'
    }, {
      value: 100000,
      text: '>= 100000'
    }, {
      value: 50000,
      text: '>= 50000'
    }]

    return (
      data.map(option => <option key={option.value} value={option.value}>{option.text}</option>)
    )
  }

  render () {
    return (
      <div>
        <select onChange={(event) => this.props.filter(event.target.value)}>
          {this.renderOption()}
        </select>
        {/*<label>{this.state.value}</label>*/}
      </div>
    )
  }
}

export default Selector
