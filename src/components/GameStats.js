import React from 'react';

function GameStats({ xScore, ties, oScore, opponent }) {
  return (
    <div className="stats">
        <span>
            <p>YOU</p>
            <p>{xScore || 0}</p>
        </span>
        <span>
            <p>TIES</p>
            <p>{ties || 0}</p>
        </span>
        <span>
            <p>{opponent || "COM"}</p>
            <p>{oScore || 0}</p>
        </span>
    </div>
  )
}

export default GameStats;