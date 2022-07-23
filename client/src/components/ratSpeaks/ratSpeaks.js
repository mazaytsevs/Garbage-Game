import React, { useState } from 'react';
import classes from './ratSpeaks.module.css';

const ratText = ['привет!', 'я крыса', 'сортируй быстрее!', 'гринпис гордится тобой', ':)))))'];
function RatSpeaks() {
  const [ratFlag, setRatFlag] = useState(false);
  const hideRatSpeaks = () => {
    setTimeout(() => setRatFlag(false), 3000);
  };
  const handleClick = () => {
    setRatFlag(true);
    hideRatSpeaks();
  };
  return (
    <div className={classes.ratSpeaksContainer} onClick={() => handleClick()}>
      {ratFlag ? (
        <div className="thought">
          {ratText[Math.floor(Math.random() * ratText.length)]}
        </div>
      )
        : null}
    </div>
  );
}

export default RatSpeaks;
