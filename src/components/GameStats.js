import React from 'react';

function GameStats({ xScore, tiles, oScore, player }) {
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
            <p>{player}</p>
            <p>{oScore || 0}</p>
        </span>
    </div>
  )
}

export default GameStats;