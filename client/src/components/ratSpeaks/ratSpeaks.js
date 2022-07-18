import React, { useState } from 'react';
import classes from './ratSpeaks.module.css';

const ratText = ['цветной пластик в пластик не клади', 'ты молодец, скоро в ГРИНПИС', 'береги матушку-природу', 'ты веришь в святого Стюарта Литтла?', 'спасибо, Геннадий, что приютил', 'кто не сортирует, тот не ест просрочку', 'из этого ничего не приготовить, я же не Рататуй', 'когда уже найдешь себе девушку?'];
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
