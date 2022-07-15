import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Info from '../components/Info/Info';
import Rules from '../components/Rules/Rules';
import { getTimeProgressThunk } from '../redux/actions/timeProgress.action';

// import '../components/GameNav/gameNav.css';

function GameNav2() {
  const dispatch = useDispatch();
  const timeProgress = useSelector((state) => state.timeprogress);
  useEffect(() => {
    dispatch(getTimeProgressThunk());
  }, []);
  console.log('timeprogresssssssssssssssss', timeProgress);
  const navigate = useNavigate();
  // MARIA -> повесила на кнокпи стейты чтобы открывать и закрывать модалки с инфой и правилами
  const [isModal, setModal] = React.useState(false);
  const [rulesModal, setRulesModal] = React.useState(false);
  return (
    <div className="main">
      <div className="header">
        <div>
          <p className="score">{`Баллы ${timeProgress.score || 0}`}</p>
        </div>
      </div>
      <div className="navbar">
        {/* TODO размер дива ниже должен быть равен ширине икнок справа */}
        <div className="progressBar">
          {Math.floor(timeProgress.score / 20) > 0 && (
            <img
              className="progressBarTrashCan1"
              src="/gameNavPic/trashcan.png"
              alt="progressBar"
            />
          )}
          {Math.floor(timeProgress.score / 20) > 1 && (
            <img
              className="progressBarTrashCan2"
              src="/gameNavPic/trashcan.png"
              alt="progressBar"
            />
          )}
          {Math.floor(timeProgress.score / 20) > 2 && (
            <img
              className="progressBarTrashCan3"
              src="/gameNavPic/trashcan.png"
              alt="progressBar"
            />
          )}
          {Math.floor(timeProgress.score / 20) > 3 && (
            <img
              className="progressBarTrashCan4"
              src="/gameNavPic/trashcan.png"
              alt="progressBar"
            />
          )}
          {Math.floor(timeProgress.score / 20) > 4 && (
            <img
              className="progressBarTrashCan5"
              src="/gameNavPic/trashcan.png"
              alt="progressBar"
            />
          )}
          {Math.floor(timeProgress.score / 20) > 5 && (
            <img
              className="progressBarTrashCan6"
              src="/gameNavPic/trashcan.png"
              alt="progressBar"
            />
          )}
        </div>
        <div className="icons">
          <div className="rules">
            <input
              type="image"
              className="rulesButton"
              alt="rules"
              src="/gameNavPic/rules.png"
              onClick={() => setRulesModal(true)}
            />
            <Rules rulesModal={rulesModal} setRulesModal={setRulesModal} />
          </div>
          <div className="info">
            <input
              type="image"
              className="infoButton"
              alt="info"
              src="/gameNavPic/info.png"
              onClick={() => setModal(true)}
            />
            <Info isModal={isModal} setModal={setModal} />
          </div>
          <div className="logout">
            <input
              type="image"
              className="logoutButton"
              alt="exit"
              src="/gameNavPic/logout.png"
              onClick={(e) => {
                e.stopPropagation();
                navigate('/');
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameNav2;
