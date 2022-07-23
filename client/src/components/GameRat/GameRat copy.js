import React, { useState } from 'react';
import './gameRat.css';

const myArr = [
  { id: 1, name: 'cat' },
  { id: 2, name: 'rat' },
  { id: 3, name: 'dog' },
  { id: 4, name: 'rabbit' },
];

function GameRat() {
  const ratLooks = (
    <div className="sprite-image" />
  );
  return (
    <div>
      <div className="sprite-container">
        <div className="sprite-image" />
      </div>
    </div>
  );
}

export default GameRat;
