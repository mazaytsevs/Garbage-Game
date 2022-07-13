import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrashes } from '../../helpers';
import { generateTrashThunk } from '../../redux/actions/actions';
import { changeFlagThunk } from '../../redux/actions/changeFlagAction';
import { getProgressThunk } from '../../redux/actions/progress.action';
import { generateTrashRandomThunk } from '../../redux/actions/randomTrashAction';

import GameBomzh from '../GameBomzh/GameBomzh';
import Container from '../GameLogic/Container';
import GameNav from '../GameNav/GameNav';
import GameRat from '../GameRat/GameRat';
import Load from '../loader/loader';
import Rules from '../Rules/Rules';
import './game.css';

function Game() {
  // получаем мусорные баки
  const dispatch = useDispatch();
  const trashBinsFromDB = useSelector(
    (state) => state.trashGenerate?.trashCans,
  );
  const trashWithoutMan = trashBinsFromDB?.slice(0, trashBinsFromDB.length - 1);

  const flag = useSelector(
    (state) => state.flag,
  );

  useEffect(() => {
    dispatch(changeFlagThunk());
  }, []);

  // получаем мусор
  const trashes = useSelector((state) => state.trashGenerate?.trashes);
  const randomTrashes = useSelector((state) => state.randomTrashes);
  const [bagPic, setBagPic] = useState('/trashbag/trashbag.png');
  // для обращения к бэку
  // const [randomTrashes, setRandomTrashes] = useState([]);

  useEffect(() => {
    // console.log('MUUUUSOOOOOOOOOR', trashes);
    dispatch(generateTrashThunk());
  }, []);

  console.log('trashes', trashes);
  // useEffect(() => {
  //   if (randomTrashes.length === 0) {
  //     setRandomTrashes(getTrashes(trashes));
  //   }
  // }, [randomTrashes]);

  useEffect(() => {
    if (randomTrashes.length === 0) {
      dispatch(generateTrashRandomThunk(trashes));
    }
  }, [randomTrashes]);

  // console.log('RANDOOOOOOM', getTrashes(trashes));
  const refreshTrash = () => {
    dispatch(generateTrashRandomThunk((getTrashes(trashes))));
  };

  // console.log(randomTrashes);
  const progress = useSelector((state) => state.progress);

  useEffect(() => {
    dispatch(getProgressThunk());
  }, []);

  const { background } = progress;

  // для лоудера
  const [loading, setLoading] = useState(true);
  const componentDidMount = () => {
    setTimeout(() => setLoading(false), 4000); // do your async call
  };

  componentDidMount();

  // для модалки с правилами
  const [rulesModal, setRulesModal] = React.useState(true);

  return (
    <div>
      {loading ? (<Load />)
        : (
          <div className={background}>
            <Rules rulesModal={rulesModal} setRulesModal={setRulesModal} />
            <div>
              <GameNav />
            </div>
            <div>
              {/* <GameRat /> */}
              <Container
                trash={randomTrashes}
                trashBin={trashWithoutMan}
                refreshTrash={refreshTrash}
                randomTrashes={randomTrashes}
                setRandomTrashes={setRandomTrashes}
              />
            </div>
            <div>
              <GameBomzh />
            </div>
          </div>
        )}
    </div>
  );
}

export default Game;
