import React from 'react';

function GameStats({ xScore, tiles, oScore, player }) {
  return (
    <div className="stats">
        <span>
            <p>YOU</p>
            <p>{xScore || 15}</p>
        </span>
        <span>
            <p>TILES</p>
            <p>{tiles || 7}</p>
        </span>
        <span>
            <p>{player || "COM"}</p>
            <p>{oScore || 10}</p>
        </span>
    </div>
  )
}

export default GameStats;