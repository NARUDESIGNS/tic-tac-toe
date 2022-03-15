import React from 'react';

function GameStats({ xScore, tiles, oScore, opponent }) {
  return (
    <div className="stats">
        <span>
            <p>YOU</p>
            <p>{xScore || 0}</p>
        </span>
        <span>
            <p>TILES</p>
            <p>{tiles || 0}</p>
        </span>
        <span>
            <p>{opponent || "COM"}</p>
            <p>{oScore || 0}</p>
        </span>
    </div>
  )
}

export default GameStats;