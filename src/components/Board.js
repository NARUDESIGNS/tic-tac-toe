import BoardButton from './BoardButton';

function Board({ boardState, handleClick, won }) {
  return (
    <div className="board">
      {boardState.map((spot, index) => (
        <BoardButton 
          handleClick={handleClick} 
          className={won.includes(index) ? "won" : null} 
          value={spot} 
          key={index} 
          index={index}
        />
      ))}
    </div>
  )
}

export default Board;