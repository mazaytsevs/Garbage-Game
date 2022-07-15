import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateTrashThunk } from '../redux/actions/actions';
import GameBomzh from '../components/GameBomzh/GameBomzh';
import Container2 from './Container2';
import GameNav from '../components/GameNav/GameNav';
import { getProgressThunk } from '../redux/actions/progress.action';
import GameNav2 from './GameNav2';
import GameBomzh2 from './GameBomzh2';
// import GameNav from '../components/GameNav/GameNav';
import GameRat from '../components/GameRat/GameRat';
import Load from '../components/loader/loader';
import Rules from '../components/Rules/Rules';
import '../components/Game/game.css';
import { getTimeProgressThunk } from '../redux/actions/timeProgress.action';
import Conveyor from './conveyor/Conveyor';
import Timer from './Timer';
import HardFinal from '../components/HardFinal/HardFinal';
import { generateTimeTrashThunk } from '../redux/actions/trashTimeAction';

function Game() {
  // const [initialMinute, setInitialMinute] = useState(0);
  // const [initialSeconds, setInitialSeconds] = useState(10);
  const [isOpen, setIsOpen] = useState(false);
  // получаем мусорные баки
  const trashBinsFromDB = useSelector(
    (state) => state.trashTime?.trashCans,
  );
  const trashWithoutMan = trashBinsFromDB?.slice(0, trashBinsFromDB.length - 1);

  // получаем мусор
  const [bagPic, setBagPic] = useState('/trashbag/trashbag.png');
  // для обращения к бэку
  const dispatch = useDispatch();
  const trashes = useSelector((state) => state.trashTime?.trashes);
  useEffect(() => {
    dispatch(generateTimeTrashThunk());
  }, []);

  // const lala = useSelector(
  //   (state) => state.trashTime,
  // );

  // useEffect(() => {
  //   dispatch(generateTimeTrashThunk());
  // }, []);
  // console.log('MUUUUSOOOOOOOOOR', lala);

  // функция которая вытаскивает ШЕСТЬ рандомных мусоров из неотгаданных

  const [flag, setFlag] = useState(false);
  const showTrash = () => {
    setFlag(!flag);
    // setBagPic('/trashBins/dangerous.png');
  };

  const timeProgress = useSelector((state) => state.timeprogress);
  useEffect(() => {
    dispatch(getTimeProgressThunk());
    console.log('------>', timeProgress);
  }, []);
  const { background } = timeProgress;
  // для лоудера
  const [loading, setLoading] = useState(true);
  const componentDidMount = () => {
    setTimeout(() => setLoading(false), 4000); // do your async call
  };
  componentDidMount();
  // для модалки с правилами
  const [rulesModal, setRulesModal] = React.useState(true);
  const bomzh = trashBinsFromDB && trashBinsFromDB[trashBinsFromDB.length - 1];

  return (
    <div>

      {loading ? (<Load />)
        : (
          <div className={background}>
            {/* {isOpen && <HardFinal isOpen={isOpen} setIsOpen={setIsOpen} />} */}
            {/* <Timer props={{ isOpen, setIsOpen }} /> */}

            {/* <Rules rulesModal={rulesModal} setRulesModal={setRulesModal} /> */}
            <div>
              <GameNav2 />
            </div>
            <div>
              {/* <GameRat /> */}
              <Container2 trashBin={trashWithoutMan} bomzh={bomzh} />
            </div>
            {/* <div>
              <GameBomzh2 />
            </div> */}
            <Conveyor />
          </div>
        )}
    </div>
  );
}

export default Game;
