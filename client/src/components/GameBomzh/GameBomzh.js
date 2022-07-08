import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './gameBomzh.css';

function GameBomzh() {
  const trashBinsFromDB = useSelector((state) => state.trashGenerate?.trashCans);
  // eslint-disable-next-line no-unsafe-optional-chaining
  return (
    <div className="GameBomzh">
      {trashBinsFromDB
            && (
            <div className="bomzh" id={(trashBinsFromDB[trashBinsFromDB.length - 1]).id}>
              <img
                className="man"
                src="man/image19.png"
                alt="man"
                width="500"
              />
            </div>
            )}
    </div>
  );
}

export default GameBomzh;
