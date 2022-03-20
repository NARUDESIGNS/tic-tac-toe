import React from 'react';

function GameStats({ opponent, ties, yourScore, opponentScore }) {
  return (
    <div className="stats">
        <span>
            <p>YOU</p>
            <p>{yourScore || 0}</p>
        </span>
        <span>
            <p>TIES</p>
            <p>{ties || 0}</p>
        </span>
        <span>
            <p>{opponent || "COM"}</p>
            <p>{opponentScore || 0}</p>
        </span>
    </div>
  )
}

export default GameStats;