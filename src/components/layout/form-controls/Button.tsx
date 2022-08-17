import React from 'react'

function Button(props:any) {
  return (
  <>
  <button className='form-control btn btn-primary' onClick = {props.onClick}>{props.text}</button>
  </>
  )
}

export default Button