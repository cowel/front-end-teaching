// Libs
import React, { Component } from 'react'

// Styles
import './App.css'

// Component 
import Button from './components/Button'
import TextInput from './components/TextInput'


const increase = {
  type: 'INCREASE',
  value: 5 
}

// Stateful component
class App extends Component {  
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  onChangeText = (text) => {
    this.setState({value: text})
  }

  renderTodos = () => (
    this.props.list.map(todo => (
      <li 
        key={todo.id}
        onClick={() => this.props.toggleTodo(todo.id)}
        style={todo.isCompleted ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}
      >
        {todo.text}
        <Button 
          nameBtn={'Delete'}
          onClickBtn={() => {
            this.props.deleteTodo(todo.id)
          }}
        />
      </li>
    ))
  )

  renderButton = () => {
    const btns = [{
      nameBtn: 'All',
      onClickBtn: () => this.props.filterTodos('ALL')
    }, {
      nameBtn: 'Active',
      onClickBtn: () => this.props.filterTodos('ACTIVE')
    }, {
      nameBtn: 'Completed',
      onClickBtn: () => this.props.filterTodos('COMPLETED')
    }]
    return (
      btns.map(btn => <Button nameBtn={btn.nameBtn} onClickBtn={btn.onClickBtn} />)
    )
  }

  render() {
    console.log('this.props ', this.props.list)
    const { value } = this.state
    return (
      <div className="App">
        <TextInput 
          value={value}
          onChangeText={this.onChangeText}
        />
        <Button 
          nameBtn={'+'}
          onClickBtn={() => {
            this.props.addTodo(value)
            this.setState({value: ''})
          }}
        />
        <ul>
          {this.renderTodos()}
        </ul>
        {this.renderButton()}
      </div>
    );
  }
}

export default App;
