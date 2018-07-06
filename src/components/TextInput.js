import React from 'react'

const TextInput = (props) => {
  return (
    <input 
      type='text'
      onChange={(event) => props.filterText(event.target.value)}
    />
  )
}

export default TextInput
