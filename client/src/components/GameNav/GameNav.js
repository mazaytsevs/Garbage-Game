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
              className="progressBar"
              src="https://img.freepik.com/premium-vector/loading-new-year-2021-to-2022-progress-bar-with-blue-background_443193-375.jpg?w=740"
              alt="progressBar"
            />
          </div>
          <div className="icons">
            <div className="rules">
              <img
                className="smallIcon"
                src="https://upload.wikimedia.org/wikipedia/commons/4/43/Minimalist_info_Icon.png"
                alt="rules"
              />
            </div>
            <div className="info">
              <img
                className="smallIcon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Question_mk_grey.png/1200px-Question_mk_grey.png"
                alt="info"
              />
            </div>
            <div className="exit">
              <img
                className="smallIcon"
                src="https://www.clipartmax.com/png/middle/217-2179335_exit-clipart-svg-exit-icon-vector-png.png"
                alt="exit"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameNav;
