// import { RiCloseLine } from 'react-icons/ri';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './Modal.module.css';
import { signUp } from '../../../redux/actions/user.action';

function Modal({ setIsOpen }) {
  const [userSignUp, setUserSignUp] = useState({
    email: '',
    password: '',
    name: '',
  });

  const navigate = useNavigate();

  const changeHandler = (e) => {
    setUserSignUp((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signUp(userSignUp, navigate));
    setIsOpen(false);
  };
  return (
    <>
      {/* <div className={styles.darkBG} onClick={() => setIsOpen(false)} /> */}
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div>
            <form onSubmit={submitHandler}>
              <div className={styles.no}>
                <button type="submit" onClick={() => setIsOpen(false)} className={styles.no2}>
                  <img src="./authPics/no.png" alt="yes" />
                </button>
              </div>
              <legend className={styles.headIn}>Регистрация</legend>
              <div>
                <input className={styles.input1} onChange={changeHandler} value={userSignUp.email} type="email" name="email" placeholder="Email" />
              </div>

              <div>
                <input className={styles.input2} onChange={changeHandler} value={userSignUp.name} type="text" name="name" placeholder="Name" />
              </div>

              <div className="mb-3">
                <input className={styles.input3} onChange={changeHandler} value={userSignUp.password} type="password" name="password" placeholder="Pass" />
              </div>

              <button className={styles.buttonIn} type="submit">
                <div className={styles.forReady}>
                  <img src="./authPics/yes.png" alt="yes" />
                  <span className={styles.ready}>Готово</span>
                </div>
              </button>
            </form>
          </div>
          {/* <button
                type="submit"
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button> */}
        </div>
      </div>
    </>
  );
}

export default Modal;
