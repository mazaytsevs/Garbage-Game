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
  const dispatch = useDispatch();
  const trashBinsFromDB = useSelector(
    (state) => state.trashGenerate?.trashCans,
  );
  const trashWithoutMan = trashBinsFromDB?.slice(0, trashBinsFromDB.length - 1);
  const trashes = useSelector((state) => state.trashGenerate?.trashes);
  const trashRandom = useSelector((state) => state.trashRandom);
  const [bagPic, setBagPic] = useState('/trashbag/trashbag.png');

  // eslint-disable-next-line no-unsafe-optional-chaining
  const bomzh = trashBinsFromDB && trashBinsFromDB[trashBinsFromDB.length - 1];
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

  const [loading, setLoading] = useState(true);
  const componentDidMount = () => {
    setTimeout(() => setLoading(false), 4000); // do your async call
  };

  componentDidMount();
  const [rulesModal, setRulesModal] = React.useState(true);
  useEffect(() => {
    dispatch(getEndGameThunk(progress.score));
  }, [progress]);
  const checkEndGame = useSelector((state) => state.endGame);

  return (
    <div>
      {loading ? (<Load />)
        : (
          <div className={background}>
            {progress.score == null
              ? <Rules rulesModal={rulesModal} setRulesModal={setRulesModal} />
              : null}
            <div>
              <GameNav />
            </div>
            <div>
              <Container
                trash={trashRandom}
                trashBin={trashWithoutMan}
                refreshTrash={refreshTrash}
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
