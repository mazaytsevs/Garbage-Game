import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHomelessThunk } from '../../redux/actions/homeless.action';
import RatSpeaks from '../ratSpeaks/ratSpeaks';
import './gameBomzh.css';

function GameBomzh() {
  const trashBinsFromDB = useSelector((state) => state.trashGenerate?.trashCans);
  // eslint-disable-next-line no-unsafe-optional-chaining
  const homeless = useSelector((state) => state.homeless);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHomelessThunk());
  }, []);

  const ratSpeaks = homeless.includes('58');
  console.log('ratSpeaks', ratSpeaks);
  return (
    <div className="GameBomzh">
      {trashBinsFromDB
            && (
            <div className="bomzh" id={(trashBinsFromDB[trashBinsFromDB.length - 1]).id}>
              <img
                className="man"
                src={`/man/${homeless}.png`}
                alt="man"
                width="250"
              />
            </div>
            )}
      {ratSpeaks ? <RatSpeaks /> : null}
    </div>
  );
}

export default GameBomzh;
