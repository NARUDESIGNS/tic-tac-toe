import { useState } from 'react';
import './App.css';
import Game from './pages/Game';
import Home from './pages/Home';

function App() {
  // state data will be after the home component loads
  const [marker, setMarker] = useState(null);
  const [opponent, setOpponent] = useState(null);

  const getSelection = (marker, opponent) => {
    setMarker(marker);
    setOpponent(opponent);
  }

  const play = () => {
    if (marker === 'X') setMarker('O');
    else setMarker('X');
  }

  return (
    <div className="App">
      <Home getSelection={getSelection} />
      <Game gamer={opponent} marker={marker} play={play}/>
    </div>
  );
}

export default App;
