import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Document, Page } from 'react-pdf';
import { getInfoThunk } from '../../redux/actions/actions';
import Modal from '../Modal/Modal';

function Rules() {
  // для обращения к бэку
  // const dispatch = useDispatch();
  // const info = useSelector((state) => state.info);
  // useEffect(() => {
  //   dispatch(getInfoThunk());
  // }, []);
  const [rulesModal, setRulesModal] = React.useState(false);
  return (
    <div className="rulesContainer">
      <button type="button" onClick={() => setRulesModal(true)}>УЗНАТЬ ПРАВИЛА</button>
      <Modal
        isVisible={rulesModal}
        title={<h1>Правила игры</h1>}
        content={(
          <div className="rulesText">
            Тут написаны правила.
            Нужно нажать на мешок с мусором. Из него выпадет всякий мусор.
            Этот мусор нужно рассортировать по контейнарм внизу экрана.
            Если возникают сложности, нажми на кнопку инфой в правом верхнем углу.
            Удачи!
          </div>
            )}
        footer={<button type="button" onClick={() => setRulesModal(false)}> OK </button>}
        onClose={() => setRulesModal(false)}
      />
    </div>

  );
}

export default Rules;
