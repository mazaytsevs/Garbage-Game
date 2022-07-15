import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrashes } from '../../helpers';
import { generateTrashThunk, getEndGame, getEndGameThunk } from '../../redux/actions/actions';
import { changeFlagThunk } from '../../redux/actions/changeFlagAction';
import { getProgressThunk } from '../../redux/actions/progress.action';
import { generateTrashRandomThunk } from '../../redux/actions/randomTrashAction';
import EndGame from '../EndGame/EndGame';
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
  // const audio = new Audio('/music/gameMusic.m4a');
  // audio.play();
  // получаем мусор
  const trashes = useSelector((state) => state.trashGenerate?.trashes);
  const trashRandom = useSelector((state) => state.trashRandom);
  const [bagPic, setBagPic] = useState('/trashbag/trashbag.png');

  // MZ -> начало -> получаю бомжа-контейнера
  // eslint-disable-next-line no-unsafe-optional-chaining
  const bomzh = trashBinsFromDB && trashBinsFromDB[trashBinsFromDB.length - 1];
  // MZ -> конец -> получаю бомжа-контейнера
  useEffect(() => {
    dispatch(generateTrashThunk());
  }, []);
  useEffect(() => {
    if (trashRandom.length === 0 && trashes.length !== 0) {
      dispatch(generateTrashRandomThunk((getTrashes(trashes))));
    }
  }, [trashes]);
  const refreshTrash = () => {
    dispatch(generateTrashRandomThunk((getTrashes(trashes))));
  };
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
  console.log('progress', progress.score);
  // для модалки с правилами
  const [rulesModal, setRulesModal] = React.useState(true);

  // для проверки на конец игры
  useEffect(() => {
    dispatch(getEndGameThunk(progress.score));
  }, [progress]);
  const checkEndGame = useSelector((state) => state.endGame);

  return (
    <div>
      {/* MZ ->
      проверка на конец игры, если прогресс 100 то запускается функция с другим компонентом */}
      {checkEndGame
        ? <EndGame /> : null}
      {/* <EndGame score={progress.score} /> */}
      {loading ? (<Load />)
        : (
          <div className={background}>
            {/*  MZ -> модалка с правилами теперь только при прогрессе 0 */}
            {progress.score == null
              ? <Rules rulesModal={rulesModal} setRulesModal={setRulesModal} />
              : null}
            {/* MZ -> конец проверок */}
            <div>
              <GameNav />
            </div>
            <div>
              <Container
                trash={trashRandom}
                trashBin={trashWithoutMan}
                refreshTrash={refreshTrash}
                // MZ -> передаю бомжа-контейнера
                bomzh={bomzh}
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
