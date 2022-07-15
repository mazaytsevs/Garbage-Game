import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PassportModal from './PassportModal';
import classes from './EndGame.module.css';

function EndGame() {
  const [isModal, setModal] = useState(false);
  const [passport, setPassport] = useState(true);
  const showPassportModal = () => {
    setTimeout(() => setModal(!isModal), 8000);
  };
  const hidePassport = () => {
    setTimeout(() => setPassport(!passport), 8000);
  };
  useEffect(() => {
    (showPassportModal());
  }, []);
  useEffect(() => {
    (hidePassport());
  }, []);
  const showCat = (isModal === false && passport === false);
  console.log('showCat', showCat);
  return (
    <div>
      {passport
        ? (
          <div className={classes.passportFlyContainer}>
            <div className={classes.passportFlyImg} />
          </div>
        )
        : null}
      <PassportModal isModal={isModal} setModal={setModal} />
      {showCat
        ? (
          <div className={classes.catWalksContainer}>
            <div className={classes.catWalksImg}>
              <span className={classes.tooltip}>
                Я потерялся!
                Если вы хотите сделать еще одно доброе дело
                и помочь мне найти свой дом,
                то переходите на сайт
                <h1>Хочу домой</h1>
                Геннадий сейчас так и сделает!
                <Link
                  to="/endgame"
                >
                  Ок!
                </Link>
              </span>
            </div>
          </div>
        )
        : null }
    </div>
  );
}

export default EndGame;
