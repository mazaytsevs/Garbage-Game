import React, { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import styles from './nav.module.css';

function Navbar() {
  const user = useSelector((state) => state.user);

  return (
    <div className={styles.backAuth}>
      <div className={styles.back2Auth}>
        <div>
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
                      <NavLink
                        className={styles.navlink}
                        to="/auth/reg"
                      >
                        <div className={styles.img1}>
                          <span className={styles.signup}>
                            Регистрация
                          </span>
                          <img
                            className={styles.arrow}
                            src="/authPics/arrow.png"
                            alt="k"
                          />
                        </div>
                      </NavLink>

                    </li>
                    <li>
                      <NavLink
                        className={styles.navlink}
                        to="/auth/login"
                      >
                        <div className={styles.img1}>
                          <span className={styles.signin}>
                            Вход
                          </span>
                          <img
                            className={styles.arrow}
                            src="/authPics/arrow.png"
                            alt="k"
                          />
                        </div>
                      </NavLink>

                    </li>

                  </>
                )}
              </ul>
            </div>
          </nav>

        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>

    </div>
  );
}

export default Navbar;
