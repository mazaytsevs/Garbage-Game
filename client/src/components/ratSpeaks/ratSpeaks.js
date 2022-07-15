import React, { useState } from 'react';
import classes from './ratSpeaks.module.css';

const ratText = ['привет!', 'я крыса', 'сортируй быстрее!', 'гринпис гордится тобой', ':)))))'];
console.log('randomtext', ratText[Math.floor(Math.random() * ratText.length)]);
function RatSpeaks() {
  const [ratFlag, setRatFlag] = useState(false);
  const hideRatSpeaks = () => {
    setTimeout(() => setRatFlag(false), 3000);
  };
  console.log('ratFlag', ratFlag);
  const handleClick = () => {
    setRatFlag(true);
    hideRatSpeaks();
  };
  return (
    <span className={classes.ratSpeaksContainer} onClick={() => handleClick()}>
      {ratFlag ? (
        <div className="thought">
          {ratText[Math.floor(Math.random() * ratText.length)]}
        </div>
      )
        : null}
    </span>
  );
}

export default RatSpeaks;
