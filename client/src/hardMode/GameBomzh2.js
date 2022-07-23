import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTimeHomelessThunk } from '../redux/actions/timehomeless.action';
import '../components/GameBomzh/gameBomzh.css';

function GameBomzh2() {
  const trashBinsFromDB = useSelector((state) => state.trashTime?.trashCans);
  // eslint-disable-next-line no-unsafe-optional-chaining
  const timehomeless = useSelector((state) => state.timehomeless);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTimeHomelessThunk());
  }, []);

  return (
    <div className="GameBomzh">
      {trashBinsFromDB
            && (
            <div className="bomzh" id={(trashBinsFromDB[trashBinsFromDB.length - 1]).id}>
              <img
                className="man"
                src={`/man/${timehomeless}.png`}
                alt="man"
                width="250"
              />
            </div>
            )}
    </div>
  );
}

export default GameBomzh2;
