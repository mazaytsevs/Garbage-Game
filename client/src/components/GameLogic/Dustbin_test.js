/* eslint-disable import/prefer-default-export */
import './Dustbin.css'; // стили перенесла сюда!!!

import React, { useEffect, useSelector } from 'react';
import { useDispatch } from 'react-redux';

import { useDrop } from 'react-dnd';
import { postProgressThunk } from '../../redux/actions/progress.action';
import { deleteTrashThunk } from '../../redux/actions/actions';
import { deleteTrashRandomThunk } from '../../redux/actions/randomTrashAction';
import { getHomelessThunk } from '../../redux/actions/homeless.action';

// комопонент корзины
export function Dustbin(props) {
  const dispatch = useDispatch();

  const {
    backgroundImage, binName,
  } = props;
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: 'box',
      // drop сработает когда бросаем итем в корзину, тут добавь удаление итемки,
      // передаю сюда пропсом функцию установки визибл для итема и вызови в ondrop

      drop: (item) => {
        console.log('item', item);
        console.log('binName', binName);
        if (item.itemType === binName) {
          dispatch(postProgressThunk(item));
          dispatch(deleteTrashThunk(item.id));
          dispatch(deleteTrashRandomThunk(item.id));

          dispatch(getHomelessThunk());
        }
        return { name: binName };
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
  ); // чтобы вызывать всякую хуйню, которая пришла снаружи, выше, добавляем в этот массив

  const isActive = canDrop && isOver;
  let boxShadow;
  if (isActive) {
    boxShadow = '10px 5px 5px red';
  }
  return (
    <div
      ref={drop}
      style={{
        boxShadow,
        backgroundRepeat: 'no-repeat',
      }}
      data-testid="dustbin"
    >

      {/* <img width="100" height="200" cobject-fit="cover" src={backgroundImage} alt="" /> */}

      {/* {backgroundImage ?
      <img width="200" height="250" object-fit="cover" src={backgroundImage} alt="" />
        : null } */}
      <img width="200" height="250" object-fit="cover" src={backgroundImage} alt="" />

      {isActive && 'Бросай'}
    </div>
  );
}
