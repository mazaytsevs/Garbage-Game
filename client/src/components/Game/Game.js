import React from 'react';
import GameBins from '../GameBins/GameBins';
import GameBoard from '../GameBoard/GameBoard';
import GameBomzh from '../GameBomzh/GameBomzh';
import GameNav from '../GameNav/GameNav';
import GameRat from '../GameRat/GameRat';
import './game.css';

function Game() {
  return (
    <div className="backGround">
      <div>
        <GameNav />
      </div>
      <div>
        {/* <GameRat /> */}
        <GameBoard />
      </div>
      <div>
        <GameBins />
      </div>
      <div>
        <GameBomzh />
      </div>
    </div>
  );
}

export default Game;
