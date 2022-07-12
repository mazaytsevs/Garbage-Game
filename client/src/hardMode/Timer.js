import React, { useState, useEffect } from 'react';
import styles from './Modal.module.css';

function Timer({ props }) {
  const { initialMinute = 0, initialSeconds = 0, setIsOpen } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
        //   clearInterval(myInterval);
          setIsOpen(true);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className={styles.divTimer}>
      { minutes === 1 && seconds === 0
        ? null
        : (
          <span className={styles.timer}>
            {' '}
            {minutes}
            :
            {seconds < 10 ? `0${seconds}` : seconds}
          </span>
        )}
    </div>
  );
}

export default Timer;
