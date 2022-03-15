import BoardButton from './BoardButton';

function Board({ boardState, handleClick, winPattern }) {
  return (
    <div className="board">
      {boardState.map((spot, index) => (
        <BoardButton 
          handleClick={handleClick} 
          className={winPattern.includes(index) ? "won" : null} 
          value={spot} 
          key={index} 
          index={index}
        />
      ))}
    </div>
  )
}

export default Board;