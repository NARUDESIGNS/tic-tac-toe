import { useState, useEffect } from 'react';
import Board from '../components/Board';
import Button from '../components/Button';
import Logo from '../components/Logo';
import GameStats from '../components/GameStats';
import './Game.css';

function Game({ gamer, marker, play }) {
  const [roundIsCompleted, setRoundIsCompleted] = useState(false);
  const [finalResult, setFinalResult] = useState(null);
  const [winPattern, setWinPattern] = useState([]); // insert indexes for won buttons e.g [3,4,5]
  // boardState array represent board spots
  // 0, 1, 2
  // 3, 4, 5
  // 6, 7, 8
  const [boardState, setBoardState] = useState(Array(9).fill(''));

  // reset game
  const resetGame = () => {
    setTimeout(() => {
      console.log('restart game');
      setBoardState(Array(9).fill(''));
      setFinalResult(null);
      setRoundIsCompleted(false);
      setWinPattern([]);
    }, 2000);
  }

  // check if game is won
  const gameWon = () => {
    const rules = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for (let row of rules) {
      let [x, y, z] = row;
      if (boardState[x] !== '' && boardState[y] !== '' && boardState[z] !== '') {
        if (boardState[x] === boardState[y] && boardState[x] === boardState[z]) {
          setWinPattern([x, y, z]);
          setRoundIsCompleted(true);
          setFinalResult(`${boardState[x]} Wins!`); // announce winner
        }
      }
    }
  }

  // board spot (or button) is clicked
  const handleClick = (index) => {
    if(!roundIsCompleted && !boardState[index]) { // if round isn't complete and board spot is blank
      setBoardState(prevState => {
        prevState[index] = marker;
        gameWon();
        console.log(prevState[index]);
        return [...prevState];
      })
    }
  }

  // play and switch turn
  useEffect(() => {
    // check if all spots has some value but no winner, game result is a tie 
    if (winPattern.length < 1 && boardState.every(spot => spot != '')) {
      setFinalResult("It's a tie");
      resetGame();
    }
    play(); // next player's turn
  }, [boardState]);

  return (
    <div className="game-page">
        <Logo />
        <div className="container">
          {/* 'X' marker is selected by default so you go first unless you select 'O' marker */}
          {
            finalResult ?
            <p> {finalResult} </p> :
            <p> {marker === 'X' ? "Your" : `${gamer}'s`} turn - {marker || 'X'} </p>
          }
            <Board 
              boardState={boardState}
              handleClick={handleClick}
              winPattern={winPattern}
            />
            <GameStats opponent={gamer} />
            <Button value="RESTART" />
        </div>
    </div>
  )
}

export default Game;