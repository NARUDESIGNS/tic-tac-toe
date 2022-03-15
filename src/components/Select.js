import SelectButton from './SelectButton';

function Select({ type, selected, opponent, handleMarker, handleOpponent}) {
  if (type === 'marker') {
      return (
        <div className="select-marker">
          <p>SELECT MARKER</p>
          <p className="select-note"> X goes first </p>
          <div className="select">
            <SelectButton handleClick={handleMarker} className={selected === 'X' ? "selected-marker" : null} value='X' />
            <SelectButton handleClick={handleMarker} className={selected === 'O' ? "selected-marker" : null} value='O' />
          </div>
        </div>
      );
    } else {
      return (
        <div className="select-opponent">
          <p>PLAY AGAINST</p>
          <div className="select">
            <SelectButton handleClick={handleOpponent} className={opponent === 'COM' ? "selected-opponent" : null} value='COM' />
            <SelectButton handleClick={handleOpponent} className={opponent === 'FRIEND' ? "selected-opponent" : null} value='FRIEND' />
          </div>
        </div>
      );
    }
}

export default Select;