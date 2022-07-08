import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameBinsDragAndDrop from '../GameBinsDragAndDrop/GameBinsDragAndDrop';
import { generateTrashThunk } from '../../redux/actions/actions';
import './gameBins.css';

function GameBins() {
  // const dispatch = useDispatch();
  const trashBins = useSelector((state) => state.trashGenerate?.trashCans);
  // useEffect(() => {
  //   console.log('MUUUUSOOOOOOOOOR', trashes);
  //   dispatch(generateTrashThunk());
  // }, []);

  return (
    <div className="GameBins">
      <GameBinsDragAndDrop trashBins={trashBins} />
      <div className="gameBinsDno" />
    </div>
  );
}

export default GameBins;
