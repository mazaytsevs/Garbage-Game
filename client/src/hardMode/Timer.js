import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HardFinal from '../components/HardFinal/HardFinal';
import styles from './Modal.module.css';
import { getTableTimeProgressThunk } from '../redux/actions/timeProgress.action';

console.log(styles);

function Timer({ props }) {
  const dispatch = useDispatch();
  const {
    initialMinute = 0, initialSeconds = 0, isOpen, setIsOpen,
  } = props;
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > -1) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          dispatch(getTableTimeProgressThunk());
          setIsOpen(!isOpen);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [seconds]);

  return (
    <div className={styles.divTimer}>
      <HardFinal isOpen={isOpen} setIsOpen={setIsOpen} />
      { minutes === 1 && seconds === 0
        ? null
        : (
          <span className={styles.timer}>
            {' '}
            {minutes}
            :
            {seconds < 10 && seconds >= 0 ? `0${seconds}` : seconds < 0 ? '00' : seconds}
          </span>
        )}
    </div>
  );
}

export default Timer;
