import React from 'react';

function SelectButton({ handleClick, className, value }) {
  return (
    <button onClick={() => handleClick(value)} className={className}>
        {value}
    </button>
  )
}

export default SelectButton;