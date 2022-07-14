import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from './EndGame.module.css';

function EndScreen() {
  const navigate = useNavigate();
  return (
    <div className={classes.endscreen}>
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
  );
}

export default EndScreen;
