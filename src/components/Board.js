import React from 'react';
import BoardButton from './BoardButton';

function Board() {
  const mark = [
    '', '', '',
    '', '', '',
    '', '', ''
  ]

  return (
    <div className="board">
      <BoardButton value={mark[0]}/>
      <BoardButton value={mark[1]}/>
      <BoardButton value={mark[2]}/>
      <BoardButton value={mark[3]}/>
      <BoardButton value={mark[4]}/>
      <BoardButton value={mark[5]}/>
    </div>
  )
}

export default Board;