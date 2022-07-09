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
    <div className="GameBins">
      {/* <GameBinsDragAndDrop trashBins={trashBinsFromDB} /> */}

      <div><GameBinsDragAndDrop /></div>
      {trashBinsFromDB && (
        <div className="gameBinsFromDB">
          {trashBinsFromDB?.slice(0, trashBinsFromDB.length - 1).map((el) => (
            <img
              alt=""
              height="150"
              key={el.id}
              trashCanId={el.id}
              src={el.trash_can_img_src}
            />
          ))}
        </div>
      )}

      <div className="gameBinsDno" />
    </div>
  );
}

export default GameBins;
