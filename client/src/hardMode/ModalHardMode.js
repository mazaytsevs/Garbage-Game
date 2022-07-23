import React, { useState } from 'react';
import styles from './Modal.module.css';

function ModalHardMode({ isOpen, setIsOpen }) {
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
