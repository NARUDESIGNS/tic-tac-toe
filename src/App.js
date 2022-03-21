import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Game from './pages/Game';
import Home from './pages/Home';

function App() {
  // state data will be after the home component loads
  const [marker, setMarker] = useState(null);
  const [oppMarker, setOppMarker] = useState(null);
  const [opponent, setOpponent] = useState(null);
  const [turn, setTurn] = useState(null);

  // read selection inputs from home page
  const getSelection = (marker, opponent) => {
    setMarker(marker);
    setOpponent(opponent);
    if (marker === 'O') {
      setOppMarker('X');
      setTurn(false);
    } else {
      setOppMarker('O');
      setTurn(true);
    }
  }

  // set next turn
  const play = () => {
    turn ? setTurn(false) : setTurn(true);
  }

  // log turn details for debugging
  useEffect(() => console.log(`Turn - ${turn}, You - ${marker}, Opp - ${oppMarker}`))
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home getSelection={getSelection} />} />
          <Route 
            exact path='/game' 
            element={
              <Game opponent={opponent} 
              marker={marker} 
              play={play} 
              oppMarker={oppMarker} 
              turn={turn} 
              setTurn={setTurn}/>
            } 
          />
          {/* when user routes to unknown route */}
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;