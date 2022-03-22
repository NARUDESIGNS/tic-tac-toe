import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import comAi from '../comAi';
import Board from '../components/Board';
import Button from '../components/Button';
import Logo from '../components/Logo';
import GameStats from '../components/GameStats';
import './Game.css';


function Game({ opponent, marker, oppMarker, turn, setTurn, play }) {
  const [ties, setTies] = useState(0);
  const [yourScore, setYourScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);

  const [roundIsCompleted, setRoundIsCompleted] = useState(false);
  const [finalResult, setFinalResult] = useState(null);
  const [winPattern, setWinPattern] = useState([]); // insert indexes for won buttons e.g [3,4,5]
  // boardState array represent board spots
  // 0, 1, 2
  // 3, 4, 5
  // 6, 7, 8
  const [boardState, setBoardState] = useState(Array(9).fill(''));
  //game rules 
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

  // reset game
  const resetGame = () => {
    setTimeout(() => {
      console.log('restarted game');
      setBoardState(Array(9).fill(''));
      setFinalResult(null);
      setRoundIsCompleted(false);
      setWinPattern([]);
      marker === 'X' ? setTurn(true) : setTurn(false);
    }, 2000);
  }

  // check if game is won
  const gameWon = () => {
    for (let row of rules) {
      let [x, y, z] = row;
      if (boardState[x] !== '' && boardState[y] !== '' && boardState[z] !== '') {
        if (boardState[x] === boardState[y] && boardState[x] === boardState[z]) {
          setWinPattern([x, y, z]);
          setRoundIsCompleted(true);
          setFinalResult(`${boardState[x] === marker ? "You" : opponent} Win!`); // announce winner
          boardState[x] === marker ? setYourScore(prev => prev + 1) : setOpponentScore(prev => prev + 1);
          resetGame();
        }
      }
    }
  }

  // board spot (or button) is clicked
  const handleClick = (index) => {
    if(!roundIsCompleted && !boardState[index]) { // if round isn't complete and board spot is blank
      setBoardState(prevState => {
        prevState[index] = turn ? marker : oppMarker;
        gameWon();
        return [...prevState];
      })
    }
  }

  // Check if human is playing against com
  useEffect(() => {
    if (opponent === 'COM' && !turn) comAi(turn, boardState, rules, handleClick, roundIsCompleted);
  }, [turn]);

  // play and allow next turn
  useEffect(() => {
    // check if all spots has some value but no winner, game result is a tie 
    if (winPattern.length < 1 && boardState.every(spot => spot != '')) {
      setTies(prevState => prevState + 1);
      setFinalResult("It's a tie");
      resetGame();
    } else play(); // next player's turn
  }, [boardState]);

  return (
    <div className="game-page">
        <Logo />
        <div className="container">
          {/* 'X' marker is selected by default so you go first unless you select 'O' marker */}
          {
            finalResult ?
            <p> {finalResult} </p> :
            <p> {turn ? `Your Turn - ${marker}` : `${opponent}'s Turn - ${oppMarker}`} </p>
          }
          <Board 
            boardState={boardState}
            handleClick={handleClick}
            winPattern={winPattern}
          />
          <GameStats 
            opponent={opponent} 
            ties={ties} 
            yourScore={yourScore} 
            opponentScore={opponentScore}
          />
          <Link to="/">
              <Button value="RESTART" resetGame={resetGame}/>
          </Link>
        </div>
    </div>
  )
}

export default Game;