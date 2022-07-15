import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoThunk } from '../../redux/actions/actions';
import Modal from '../Modal/Modal';
import './rules.css';

function Rules({ rulesModal, setRulesModal }) {
  const trashCans = useSelector(
    (state) => state.trashGenerate?.trashCans,
  );
  // console.log('ololololololololololololollo', trashCans);
  return (
    <div className="rulesContainer">
      <Modal
        isVisible={rulesModal}
        title={<>Правила игры</>}
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
            {trashCans?.map((el) => (
              <div className="cansForRules" key={el.id}>
                <img width="339" height="385" src={el.trash_can_img_src} alt={el.trash_can_name} />
                <span>{el.trash_can_info}</span>
              </div>

            ))}
            <p>
              Если возникают сложности, нажми на кнопку инфо в правом верхнем углу.
              Удачи!
            </p>
          </div>
            )}
        // footer={<button type="button" onClick={() => setRulesModal(false)}> OK </button>}
        onClose={() => setRulesModal(false)}
      />
    </div>

  );
}

export default Rules;
