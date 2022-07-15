import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import { getProgressThunk } from '../../redux/actions/progress.action';

import './hardfinal.css';

function HardFinal({ isOpen, setIsOpen }) {
  const table = useSelector((state) => state.tableProgress);
  const timeProgress = useSelector((state) => state.timeprogress);
  console.log(table);

  console.log(isOpen);
  return (
    <div className="rulesContainer">
      <Modal
        isVisible={isOpen}
        title={<>Вот это результат!</>}
        content={(
          <div className="rulesText">
            Ты настоящий эксперт в области сортировки мусора,
            {' '}
            {timeProgress.name}
            !
            <p>
              Ты набрал
              {' '}
              {timeProgress.score || 0}
              {' '}
              баллов за минуту!
              Геннадий мог бы позвонить и поздравить тебя лично,
              но звонки из Амстердама слишком дорогие!
            </p>
            <p>
              Ниже можешь ознакомиться со своим результатом и сравнить его с другими игроками.
              Зови друзей, соревнуйтесь и получайте удовольствие от Garbage Game!
            </p>
            <p>
              <table>
                <tr>
                  <th>Имя</th>
                  <th>Результат</th>
                </tr>
                {table.map((el) => (
                  <tr>
                    <td>{el.name}</td>
                    <td>{el.score}</td>
                  </tr>
                ))}
              </table>
            </p>
          </div>
            )}
        onClose={() => setIsOpen(false)}
      />
    </div>

  );
}

export default HardFinal;
