import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateTrashThunk } from '../redux/actions/actions';
import { getProgressThunk } from '../redux/actions/progress.action';
import GameBomzh from '../components/GameBomzh/GameBomzh';
import Container2 from './Container2';
import GameNav from '../components/GameNav/GameNav';
import GameRat from '../components/GameRat/GameRat';
import Load from '../components/loader/loader';
import Rules from '../components/Rules/Rules';
import '../components/Game/game.css';
import Timer from './Timer';
import ModalHardMode from './ModalHardMode';
import { getTimeProgressThunk } from '../redux/actions/timeProgress.action';

function Game() {
  // const [initialMinute, setInitialMinute] = useState(0);
  // const [initialSeconds, setInitialSeconds] = useState(10);
  // const [isOpen, setIsOpen] = useState(false);
  // получаем мусорные баки
  const trashBinsFromDB = useSelector(
    (state) => state.trashGenerate?.trashCans,
  );
  const trashWithoutMan = trashBinsFromDB?.slice(0, trashBinsFromDB.length - 1);

  // получаем мусор
  const [bagPic, setBagPic] = useState('/trashbag/trashbag.png');
  // для обращения к бэку
  const dispatch = useDispatch();
  const trashes = useSelector((state) => state.trashGenerate?.trashes);
  useEffect(() => {
    // console.log('MUUUUSOOOOOOOOOR', trashes);
    dispatch(generateTrashThunk());
  }, []);

  // функция которая вытаскивает ШЕСТЬ рандомных мусоров из неотгаданных
  function getTrashes(arr) {
    const trashesFromDB = trashes?.length;
    let trashesNum = 0;
    if (trashesFromDB > 10) {
      trashesNum = 10;
    } else {
      trashesNum = trashesFromDB;
    }
    const justSomeArr = [];
    const randomTrashes = [];
    const indexArr = [];
    for (let i = 0; i < trashesFromDB; i += 1) {
      justSomeArr.push(i);
    }
    for (let y = 0; y < trashesNum; y += 1) {
      indexArr.push(justSomeArr.splice(Math.random() * justSomeArr.length, 1));
    }
    for (let x = 0; x < indexArr.length; x += 1) {
      randomTrashes.push(arr[indexArr[x]]);
    }
    return randomTrashes;
  }

  const randomTrashes = getTrashes(trashes);
  console.log('RANDOOOOOOM', getTrashes(trashes));

  const [flag, setFlag] = useState(false);
  const showTrash = () => {
    setFlag(!flag);
    // setBagPic('/trashBins/dangerous.png');
  };

  const timeProgress = useSelector((state) => state.timeProgress);
  useEffect(() => {
    dispatch(getTimeProgressThunk());
    console.log('------>', timeProgress);
  }, []);
  // const { background } = timeProgress;
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
          <div>
            {/* {isOpen && <ModalHardMode isOpen={isOpen} setIsOpen={setIsOpen} />}
            <Timer props={{ initialMinute, initialSeconds, setIsOpen }} /> */}

            {/* <Rules rulesModal={rulesModal} setRulesModal={setRulesModal} /> */}
            <div>
              <GameNav />
            </div>
            <div>
              {/* <GameRat /> */}
              <Container2 trash={randomTrashes} trashBin={trashWithoutMan} />
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
