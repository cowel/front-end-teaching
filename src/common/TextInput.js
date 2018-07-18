import React from 'react'

const TextInput = (props) => {
  return (
    <input 
      type='text'
      value={props.value}
      onChange={(event) => props.onChangeText(event.target.value)}
    />
  )
}

export default TextInput
