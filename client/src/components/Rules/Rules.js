import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Document, Page } from 'react-pdf';
import { getInfoThunk } from '../../redux/actions/actions';

function Rules() {
  // для обращения к бэку
  const dispatch = useDispatch();
  const info = useSelector((state) => state.info);
  useEffect(() => {
    dispatch(getInfoThunk());
  }, []);
  return (
    <div className="rulesContainer">
      <img width="200" alt="ФФФФФФФФФФФФФФФФФФФ" src="../../picturesMariaZob/WellDone.png" />
      <h1>Правила игры</h1>
      <div className="rulesText">
        Тут написаны правила.
        Нужно нажать на мешок с мусором. Из него выпадет всякий мусор.
        Этот мусор нужно рассортировать по контейнарм внизу экрана.
        Если возникают сложности, нажми на кнопку инфой в правом верхнем углу.
        Удачи!
      </div>
      <div className="trashcans">
        {info.map((el) => (
          <div className="singleTrashcan">
            <div className="singleTrashcanName"><h3>{el.trash_can_name}</h3></div>
            <div className="singleTrashcanInfo">{el.trash_can_info}</div>
            <div className="singleTrashcanImg"><img alt="" src={el.trash_can_img_src} /></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rules;
