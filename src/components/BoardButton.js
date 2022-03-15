import React from 'react'

function BoardButton({ handleClick, className, value, index }) {
  return (
    <button 
      onClick={() => handleClick(index)}
      className={`${className} ${value === 'X' ? 'mark-X' : 'mark-O'} board-button`}
    >
      { value }
    </button>
  )
}

export default BoardButton