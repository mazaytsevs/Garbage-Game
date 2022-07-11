import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameBinsDragAndDrop from '../GameBinsDragAndDrop/GameBinsDragAndDrop';
import { generateTrashThunk } from '../../redux/actions/actions';
import './gameBins.css';

function GameBins() {
  // const dispatch = useDispatch();
  const trashBinsFromDB = useSelector(
    (state) => state.trashGenerate?.trashCans,
  );
  // const trashBins = trashBinsFromDB.slice(0, (trashBinsFromDB.length - 1));
  // console.log(trashBins);
  // useEffect(() => {
  //   console.log('MUUUUSOOOOOOOOOR', trashes);
  //   dispatch(generateTrashThunk());
  // }, []);

  return (

    <div>
      <GameBinsDragAndDrop trashBins={trashBinsFromDB} />
    </div>
  );
}

export default GameBins;
