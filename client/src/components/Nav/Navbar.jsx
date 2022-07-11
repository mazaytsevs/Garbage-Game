import React, { useSelector } from 'react-redux';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './nav.module.css';
import Modal from '../Forms/Modal/Modal';

function Navbar() {
  const user = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.backAuth}>
      <div className={styles.back2Auth}>
        <div className={styles.div3}>
          <div className={styles.div2}>
            <h1 className={styles.start}>Garbage game</h1>
            <h3 className={styles.start2}>Эта игра научит вас сортировать мусор</h3>
            <nav>
              <div id="navbarNav">
                <ul>
                  {user ? (
                    <>
                      <li className={styles.signin}>
                        <Link
                          to="/auth/logout"
                        >
                          Выход
                        </Link>
                      </li>

                      <li>
                        <NavLink
                          to="/info"
                        >
                          Info
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/rules"
                        >
                          Rules
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <span className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
                          Регистрация
                        </span>
                        <img
                          className={styles.arrow}
                          src="/authPics/arrow.png"
                          alt="k"
                        />
                        {isOpen && <Modal setIsOpen={setIsOpen} />}

                      </li>
                      <li>
                        <span className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
                          Вход
                        </span>
                        <img
                          className={styles.arrow}
                          src="/authPics/arrow.png"
                          alt="k"
                        />
                        {isOpen && <Modal setIsOpen={setIsOpen} />}

                      </li>

                    </>
                  )}
                </ul>
              </div>
            </nav>

          </div>

          <div className={styles.div1}>
            <img className={styles.bomj} src="/authPics/bomj.png" alt="" />
          </div>

        </div>

      </div>
      {/* <button type="submit" className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      {isOpen && <Modal setIsOpen={setIsOpen} />} */}
    </div>
  );
}

export default Navbar;
