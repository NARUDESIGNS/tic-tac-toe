import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Logo from '../components/Logo';
import Select from '../components/Select';
import './Home.css';

function Home({ getSelection }) {
  const [selected, setSelected] = useState('X');
  const [opponent, setOpponent] = useState('COM');

  // marker is selected
  const handleMarker = (value) => {
    if (value === 'X') setSelected('X');
    else setSelected('O');
  }
  
  // opponent is selected
  const handleOpponent = (value) => {
    if (value === 'COM') setOpponent('COM');
    else setOpponent('FRIEND');
  }

  useEffect(() => {
    getSelection(selected, opponent);
  }, [selected, opponent]);
  
  return (
    <div className="home-page">
        <Logo />
        <div className="container">
            <section>
                <Select 
                  type="marker"
                  selected={selected}
                  opponent={opponent}
                  handleMarker={handleMarker}
                  handleOpponent={handleOpponent}
                />
                <Select 
                  type="player"
                  selected={selected}
                  opponent={opponent}
                  handleMarker={handleMarker}
                  handleOpponent={handleOpponent}
                />
            </section>
            <Link to="/game">
              <Button value="START" />
            </Link>
        </div>
    </div>
  )
}

export default Home;