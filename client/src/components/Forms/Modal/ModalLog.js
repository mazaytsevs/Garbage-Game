import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../../../redux/actions/user.action';
import styles from './ModalLog.module.css';

function ModalLog({ setIsOpenLog }) {
  const [userSignIn, setUserSignIn] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const changeHandler = (e) => {
    setUserSignIn((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signIn(userSignIn, navigate));
    setIsOpenLog(false);
  };

  return (
    <div className={styles.centered}>
      <div className={styles.modal}>
        <div>
          <form
            onSubmit={submitHandler}
          >
            <div className={styles.no}>
              <button type="submit" onClick={() => setIsOpenLog(false)} className={styles.no2}>
                <img src="./authPics/no.png" alt="yes" />
              </button>
            </div>
            <legend className={styles.headIn}>User Sign In</legend>
            <div className="mb-3">
              <input
                className={styles.input1}
                onChange={changeHandler}
                value={userSignIn.email}
                type="email"
                name="email"
                placeholder="Email"
              />
            </div>

            <div className="mb-3">
              <input
                className={styles.input2}
                onChange={changeHandler}
                value={userSignIn.password}
                type="password"
                name="password"
                placeholder="Pass"
              />
            </div>

            <button type="submit" className={styles.buttonIn}>
              <div className={styles.forReady}>
                <img src="./authPics/yes.png" alt="yes" />
                <span className={styles.ready}>Готово</span>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ModalLog;
