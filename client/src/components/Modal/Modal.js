import React from 'react';
import styles from './Modal.module.css';

function Modal({
  isVisible = false, closeBtn, title, content, footer, onClose, someFunc,
}) {
  const keydownHandler = ({ key }) => {
    switch (key) {
      case 'Escape':
        onClose();
        break;
      default:
    }
  };

  React.useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
    return () => document.removeEventListener('keydown', keydownHandler);
  });
  return (
    !isVisible ? null : (
      <div className={styles.modal} onClick={onClose}>
        <div className={styles.modal_dialog} onClick={(e) => e.stopPropagation()}>
          <div className={styles.modal_header}>
            <h3 className={styles.modal_title}>{title}</h3>
            <span className={styles.modal_close} onClick={onClose}>
              <img width="50" alt="krestik" src="/modalPics/krestik.png" />
            </span>
          </div>
          <div className={styles.modal_body}>
            <div className={styles.modal_content}>{content}</div>
          </div>
          {footer && (
          <div className={styles.modal_footer}>
            {footer}
          </div>
          )}
          <span className={styles.modal_gotovo} onClick={someFunc || onClose}>
            <img width="100" alt="gotovo" src="/modalPics/gotovo.png" />
          </span>
        </div>
      </div>
    )
  );
}

export default Modal;
