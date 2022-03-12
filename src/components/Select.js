import React from 'react';
// import SelectButton from './SelectButton';

function Select({ type }) {
  // let x = '';
  // let y = '';
  if (type === 'marker') {
      return (
        <div className="select-marker">
          <p>SELECT MARKER</p>
          <div className="select">
            <button className="selected-marker">X</button>
            <button>O</button>
            {/* <SelectButton className={x} value='X' /> */}
            {/* <SelectButton className={y} value='O' /> */}
          </div>
        </div>
      );
    } else {
      return (
        <div className="select-opponent">
          <p>PLAY AGAINST</p>
          <div className="select">
            <button className="selected-opponent">COM</button>
            <button>FRIEND</button>
          </div>
        </div>
      );
    }
}

export default Select;