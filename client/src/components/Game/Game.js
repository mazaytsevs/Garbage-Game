import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProgressThunk } from '../../redux/actions/progress.action';
import GameBins from '../GameBins/GameBins';
import GameBoard from '../GameBoard/GameBoard';
import GameBomzh from '../GameBomzh/GameBomzh';
import GameNav from '../GameNav/GameNav';
import GameRat from '../GameRat/GameRat';
import './game.css';

function Game() {
  const dispatch = useDispatch();

  const progress = useSelector((state) => state.progress);

  useEffect(() => {
    dispatch(getProgressThunk());
  }, []);

  console.log('PROGRESS1', progress);

  const { background } = progress;

  console.log('IMG', background);

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
