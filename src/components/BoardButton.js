import React from 'react'

function BoardButton({ className, value }) {
  return (
    <button className={`${className} ${value === 'X' ? 'mark-X' : 'mark-O'} board-button`}>
      { value }
    </button>
  )
}

export default BoardButton