import React from 'react';

function Button({value, resetGame}) {
  return (
    <button 
      onClick={() => value === "RESTART" ? resetGame() : null} 
      className="launch-button">{ value }
    </button>
  )
}

export default Button;