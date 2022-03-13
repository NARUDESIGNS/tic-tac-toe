import React from 'react';
import BoardButton from './BoardButton';

function Board() {
  const mark = [
    'X', 'X', 'X',
    'O', 'O', 'O',
    'X', 'O', 'X'
  ]

  let won = []; // insert indexes for won buttons e.g [3,4,5]

  return (
    <div className="board">
      {mark.map((spot, index) => (
        <BoardButton className={won.includes(index) ? "won" : null} value={spot} key={index} />
      ))}
    </div>
  )
}

export default Board;