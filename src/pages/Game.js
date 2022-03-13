import React from 'react';
import Board from '../components/Board';
import Button from '../components/Button';
import Logo from '../components/Logo';
import GameStats from '../components/GameStats';
import './Game.css';

function Game({ player, mark }) {
  return (
    <div className="game-page">
        <Logo />
        <div className="container">
            <p> {player || "Your"} turn - {mark || 'X'} </p>
            <Board />
            <GameStats />
            <Button value="RESTART" />
        </div>
    </div>
  )
}

export default Game;