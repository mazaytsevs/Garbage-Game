import React, { useState } from 'react';
import PassportModal from './PassportModal';
import classes from './EndGame.module.css';

function EndGame({ score }) {
  const [isModal, setModal] = useState(false);
  const showPassportModal = () => {
    setTimeout(() => setModal(true), 4000);
  };
  showPassportModal();
  return (
    <div>
      <div className={classes.passportFlyContainer}>
        <div className={classes.passportFlyImg} />
      </div>
      <PassportModal isModal={isModal} setModal={setModal} />
    </div>
  );
}

export default EndGame;
