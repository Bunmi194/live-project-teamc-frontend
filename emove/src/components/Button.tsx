import React from 'react'
import "../styles/button.styles.css"

interface IButton {
    backgroundColor?: string
    text?: string
    handleClick?: React.MouseEventHandler
    additionalClasses?: string 
}
export const Button: React.FC< IButton> = (props:IButton) => {
  return (
      <button
          style={{ backgroundColor: props.backgroundColor }}
          onClick={props.handleClick}
          className={props.additionalClasses}
      >
          {props.text}
      </button>
  )
}
