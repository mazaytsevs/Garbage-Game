import React from 'react';
import Modal from '../Modal/Modal';
import classes from './EndGame.module.css';

function PassportModal({ isModal, setModal }) {
  return (
    <div className="passportModal">
      <Modal
        isVisible={isModal}
        title={<h1>Ура! Геннадий нашел паспорт!</h1>}
        content={(
          <div className={classes.passportPic}>
            <img width="250" alt="page1" src="/endgame/passport.png" />
          </div>
      )}
        onClose={() => setModal(false)}
      />

    </div>
  );
}

export default PassportModal;
