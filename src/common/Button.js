import React from 'react'

const Button = (props) => {
  return(
    <button style={{display: 'inline-block'}} onClick={props.onClickBtn}>{props.nameBtn}</button>
  )
}

export default Button
