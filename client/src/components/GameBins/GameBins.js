import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GameBinsDragAndDrop from '../GameBinsDragAndDrop/GameBinsDragAndDrop';
import { generateTrashThunk } from '../../redux/actions/actions';
import './gameBins.css';

function GameBins() {
  const dispatch = useDispatch();
  const trashBins = useSelector((state) => state.trashGenerate?.trashCans);
  // useEffect(() => {
  //   console.log('MUUUUSOOOOOOOOOR', trashes);
  //   dispatch(generateTrashThunk());
  // }, []);

  return (
    <div className="GameBins">

      <div><GameBinsDragAndDrop /></div>
      <div className="gameBins">
        {trashBins?.map((el) => <img alt="" src={el.trash_can_img_src} />)}
      </div>
    </div>
  );
}

export default GameBins;
