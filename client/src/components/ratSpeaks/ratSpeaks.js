import React, { useState } from 'react';
import classes from './ratSpeaks.module.css';

const ratText = ['привет!', 'я крыса', 'сортируй быстрее!', 'гринпис гордится тобой', ':)))))'];
const text = ratText[Math.floor(Math.random() * ratText.length)];
console.log('text', text);
function RatSpeaks() {
  const [ratFlag, setRatFlag] = useState(false);
  const hideRatSpeaks = () => {
    setTimeout(() => setRatFlag(false), 2000);
  };
  const handleClick = () => {
    setRatFlag(true);
    hideRatSpeaks();
  };
  return (
    <span className={classes.ratSpeaksContainer} onClick={() => handleClick()}>
      {ratFlag ? (
        <div className={classes.ratSpeaks}>
          {text}
        </div>
      )
        : null}
    </span>
  );
}

export default RatSpeaks;
