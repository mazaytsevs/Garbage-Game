import React, { useState } from 'react';
import styles from './Modal.module.css';

function ModalHardMode({ isOpen, setIsOpen }) {
  console.log(isOpen);
  return (
    <div className={styles.centered}>
      <div className={styles.modal}>
        <div>
          <div>ModalHardMode</div>
          <button type="submit" onClick={() => setIsOpen(false)}> Close</button>
        </div>
      </div>
    </div>
  );
}

export default ModalHardMode;
