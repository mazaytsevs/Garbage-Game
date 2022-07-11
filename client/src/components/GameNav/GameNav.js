import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProgressThunk } from '../../redux/actions/progress.action';
import Info from '../Info/Info';
import Rules from '../Rules/Rules';
import './gameNav.css';

function GameNav() {
  const dispatch = useDispatch();
  const progress = useSelector((state) => state.progress);
  useEffect(() => {
    dispatch(getProgressThunk());
  }, []);
  console.log('progresssssssssssssssss', progress);
  // MARIA -> повесила на кнокпи стейты чтобы открывать и закрывать модалки с инфой и правилами
  const [isModal, setModal] = React.useState(false);
  const [rulesModal, setRulesModal] = React.useState(false);
  return (
    <div className="main">
      <div className="header">
        <div className="navbar">
          {/* TODO размер дива ниже должен быть равен ширине икнок справа */}
          <div />
          <div className="progressBar">
            <img
              className="progressBarTrashCan1"
              src="/gameNavPic/trashcan.png"
              alt="progressBar"
            />
            <img
              className="progressBarTrashCan2"
              src="/gameNavPic/trashcan.png"
              alt="progressBar"
            />
            <img
              className="progressBarTrashCan3"
              src="/gameNavPic/trashcan.png"
              alt="progressBar"
            />
            <img
              className="progressBarTrashCan4"
              src="/gameNavPic/trashcan.png"
              alt="progressBar"
            />
            <img
              className="progressBarTrashCan5"
              src="/gameNavPic/trashcan.png"
              alt="progressBar"
            />
            <img
              className="progressBarTrashCan6"
              src="/gameNavPic/trashcan.png"
              alt="progressBar"
            />
            <img
              className="progressBarTrashCan7"
              src="/gameNavPic/trashcan.png"
              alt="progressBar"
            />
            <img
              className="progressBarTrashCan8"
              src="/gameNavPic/trashcan.png"
              alt="progressBar"
            />
            <img
              className="progressBarTrashCan9"
              src="/gameNavPic/trashcan.png"
              alt="progressBar"
            />
            <img
              className="progressBarTrashCan10"
              src="/gameNavPic/trashcan.png"
              alt="progressBar"
            />
          </div>
          <div className="icons">
            <div className="rules">
              <span
                type="button"
                onClick={() => setRulesModal(true)}
              >
                <img
                  className="smallIcon"
                  src="/gameNavPic/rules.png"
                  alt="rules"
                />
              </span>
              <Rules rulesModal={rulesModal} setRulesModal={setRulesModal} />
            </div>
            <div className="info">
              <span
                type="button"
                onClick={() => setModal(true)}
              >
                <img
                  className="smallIcon"
                  src="/gameNavPic/info.png"
                  alt="info"
                />
              </span>
              <Info isModal={isModal} setModal={setModal} />
            </div>
            <div className="exit">
              <span type="button">
                <img
                  className="smallIcon"
                  src="/gameNavPic/logout.png"
                  alt="exit"
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameNav;
