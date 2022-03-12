import React from 'react'

function BoardButton({ className, value }) {
  return (
    <button className={className}>{ value }</button>
  )
}

export default BoardButton