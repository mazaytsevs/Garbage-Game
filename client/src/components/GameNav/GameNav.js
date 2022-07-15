import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProgressThunk } from '../../redux/actions/progress.action';
import EasyFinal from '../EasyFinal/EasyFinal';
import Info from '../Info/Info';
import Rules from '../Rules/Rules';
import './gameNav.css';

function GameNav() {
  const dispatch = useDispatch();
  const progress = useSelector((state) => state.progress);
  useEffect(() => {
    dispatch(getProgressThunk());
  }, []);

  // console.log('progresssssssssssssssss', progress.score);

  const navigate = useNavigate();
  // MARIA -> повесила на кнокпи стейты чтобы открывать и закрывать модалки с инфой и правилами
  const [isModal, setModal] = React.useState(false);
  const [rulesModal, setRulesModal] = React.useState(false);

  return (
    <div className="main">
      <div className="header">
        <div>
          <p className="score">{`Прогресс ${progress.score || 0}/120`}</p>
        </div>
        {/* <EasyFinal /> */}
      </div>
      <div className="navbar">
        <div className="progressBar">
          {Math.floor(progress.score / 20) > 0 && (
            <img
              className="progressBarTrashCan1"
              src="/gameNavPic/trashcan.png"
              alt="progressBar"
            />
          )}
          {Math.floor(progress.score / 20) > 1 && (
            <img
              className="progressBarTrashCan2"
              src="/gameNavPic/trashcan.png"
              alt="progressBar"
            />
          )}
          {Math.floor(progress.score / 20) > 2 && (
            <img
              className="progressBarTrashCan3"
              src="/gameNavPic/trashcan.png"
              alt="progressBar"
            />
          )}
          {Math.floor(progress.score / 20) > 3 && (
            <img
              className="progressBarTrashCan4"
              src="/gameNavPic/trashcan.png"
              alt="progressBar"
            />
          )}
          {Math.floor(progress.score / 20) > 4 && (
            <img
              className="progressBarTrashCan5"
              src="/gameNavPic/trashcan.png"
              alt="progressBar"
            />
          )}
          {Math.floor(progress.score / 20) > 5 && (
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

export default GameNav;
