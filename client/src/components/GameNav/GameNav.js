import React from 'react';
import './gameNav.css';

function GameNav() {
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
              <span type="button">
                <img
                  className="smallIcon"
                  src="/gameNavPic/rules.png"
                  alt="rules"
                />
              </span>
            </div>
            <div className="info">
              <span type="button">
                <img
                  className="smallIcon"
                  src="/gameNavPic/rules.png"
                  alt="info"
                />
              </span>
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
