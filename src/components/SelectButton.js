import React from 'react';

function SelectButton({ value, style }) {
  return (
    <button className={style}>
        {value}
    </button>
  )
}

export default SelectButton;