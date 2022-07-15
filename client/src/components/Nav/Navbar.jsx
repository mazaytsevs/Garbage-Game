import React, { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './nav.module.css';
import Modal from '../Forms/Modal/ModalReg';
import ModalLog from '../Forms/Modal/ModalLog';
import { getDeleteProgressThunk } from '../../redux/actions/progress.action';
import { getDeleteTimeProgressThunk } from '../../redux/actions/timeProgress.action';
import { deleteAddedTrashThunk } from '../../redux/actions/newAddedTrashAction';

function Navbar() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  // console.log(user);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLog, setIsOpenLog] = useState(false);

  function deleteProgress(id) {
    dispatch(getDeleteProgressThunk(id));
    dispatch(deleteAddedTrashThunk());
  }

  function deleteTimeProgress(id) {
    dispatch(getDeleteTimeProgressThunk(id));
  }
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
                      <li className={styles.signOut}>
                        <NavLink
                          to="/game"
                        >
                          Продолжить игру
                        </NavLink>
                      </li>
                      <li className={styles.signOut}>
                        <div onClick={() => deleteProgress(user.id)}>
                          <NavLink
                            to="/game"
                          >
                            Новая игра
                          </NavLink>
                        </div>
                      </li>
                      <li className={styles.signOut}>
                        <div onClick={() => deleteTimeProgress(user.id)}>
                          <NavLink
                            to="/hardmode"
                          >
                            Сложный уровень
                          </NavLink>
                        </div>
                      </li>
                      <li className={styles.signOut}>
                        <Link
                          to="/auth/logout"
                        >
                          Выход
                        </Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className={styles.primary1}>
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
                      <li className={styles.primary2}>
                        <span className={styles.primaryBtn} onClick={() => setIsOpenLog(true)}>
                          Вход
                        </span>
                        <img
                          className={styles.arrow}
                          src="/authPics/arrow.png"
                          alt="k"
                        />
                        {isOpenLog && <ModalLog setIsOpenLog={setIsOpenLog} />}

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
