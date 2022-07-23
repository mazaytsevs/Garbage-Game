import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container2 from './Container2';
import GameNav2 from './GameNav2';
import Load from '../components/loader/loader';
import '../components/Game/game.css';
import { getTimeProgressThunk } from '../redux/actions/timeProgress.action';
import Conveyor from './conveyor/Conveyor';
import { generateTimeTrashThunk } from '../redux/actions/trashTimeAction';

function Game() {
  const trashBinsFromDB = useSelector(
    (state) => state.trashTime?.trashCans,
  );
  const trashWithoutMan = trashBinsFromDB?.slice(0, trashBinsFromDB.length - 1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(generateTimeTrashThunk());
  }, []);

  const timeProgress = useSelector((state) => state.timeprogress);
  useEffect(() => {
    dispatch(getTimeProgressThunk());
  }, []);
  const { background } = timeProgress;
  const [loading, setLoading] = useState(true);
  const componentDidMount = () => {
    setTimeout(() => setLoading(false), 4000);
  };
  componentDidMount();
  const bomzh = trashBinsFromDB && trashBinsFromDB[trashBinsFromDB.length - 1];

  return (
    <div>

      {loading ? (<Load />)
        : (
          <div className={background}>
            <div>
              <GameNav2 />
            </div>
            <div>
              <Container2 trashBin={trashWithoutMan} bomzh={bomzh} />
            </div>
            <Conveyor />
          </div>
        )}
    </div>
  );
}

export default Game;
