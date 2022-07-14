import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../Modal/Modal';
import { getProgressThunk } from '../../redux/actions/progress.action';

import './easyfinal.css';

function EasyFinal() {
  const dispatch = useDispatch();
  const progress = useSelector((state) => state.progress);

  useEffect(() => {
    dispatch(getProgressThunk());
  }, []);

  const [flag, setFlag] = useState(false);

  useEffect(() => {
    if (+progress.score === 120) {
      setFlag(true);
    }
  }, [progress]);

  return (
    <div className="rulesContainer">
      <Modal
        isVisible={flag}
        title={<>WIN</>}
        content={(
          <div className="rulesText">
            Привет!
            <p>
              Меня зовут Геннадий, и я считаю себя романтиком и путешественником.
              Люблю каждый раз засыпать в новых местах, например, в колодцах теплотрасс,
              люках, чердаках и подвалах, в обнимку с порванным кроссовком.
              Моя жизнь легка и беззаботна, но ужас одолевает меня каждый раз,
              когда я начинаю разбирать мусорные пакеты местных жителей - чего в них только нет!
              Объедки могут лежать вместе с пластиковыми контейнерами, а посуда вместе с бумагой.
              В России ежегодно выбрасывается 60 миллионов тонн бытовых отходов.
              Все это копится на свалках десятилетиями и загрязняет планету.
            </p>
            <p>
              Предлагаю положить конец этому беспределу!
              Помоги мне рассортировать весь мусор по правильным контейнерам и спасти нашу планету!
            </p>
            <p>
              Тебе нужно нажать на мешок, из которого выпадет всякий мусор.
              Этот мусор нужно рассортировать по контейнерам внизу экрана.
            </p>
            <p>
              Если возникают сложности, нажми на кнопку инфо в правом верхнем углу.
              Удачи!
            </p>
          </div>
            )}
        onClose={() => setFlag(false)}
      />
    </div>

  );
}

export default EasyFinal;
