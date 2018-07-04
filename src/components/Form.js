import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vnd: '',
      usd: ''
    }
  }

  onChangeText = (event) => {
    this.setState({value: event.target.value})
  }

  render () {
    return (
      <div style={{marginTop: 20}}>
        <div>
          <input 
            type="text"
            value={this.state.vnd}
            onChange={(event) => this.onChangeText(event)}
          />
          <span>VND</span>
        </div>

        <div>
          <input 
            type="text"
            value={this.state.usd}
            onChange={(event) => this.onChangeText(event)}
          />
          <span>USD</span>
        </div>
      </div>
    )
  }
}

export default Form
