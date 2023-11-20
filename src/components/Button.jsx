import React from 'react'

function Button({text,svg,onClick}) {
  return (
    <button style={{borderRadius:'100px'}} onClick={onClick}>{text} {svg}</button>
  )
}

export default Button
