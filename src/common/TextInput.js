import React from 'react'

const TextInput = (props) => {
  return (
    <div>
      <label>{props.label}</label>
      <input 
        type='text'
        value={props.value}
        onChange={(event) => props.onChangeText(event.target.value)}
      />
    </div>
  )
}

export default TextInput
