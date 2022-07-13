/* eslint-disable max-len */
/* eslint-disable import/prefer-default-export */
import './Dustbin.css'; // стили перенесла сюда!!!

import React, { useEffect, useSelector } from 'react';
import { useDispatch } from 'react-redux';

import { useDrop } from 'react-dnd';
import { postProgressThunk } from '../../redux/actions/progress.action';
import { deleteTrashThunk } from '../../redux/actions/actions';
import { changeFlagThunk } from '../../redux/actions/changeFlagAction';
import { deleteTrashRandomThunk } from '../../redux/actions/randomTrashAction';

// комопонент корзины
export function Dustbin(props) {
  const dispatch = useDispatch();

  const {
    backgroundImage, binName, score, trashSorted, setTrashSorted, setScore,
  } = props;
  // console.log('binName', binName);
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: 'box',
      // drop сработает когда бросаем итем в корзину, тут добавь удаление итемки, передаю сюда пропсом функцию установки визибл для итема и вызови в ondrop

      drop: (item) => {
        if (item.itemType === binName) {
          dispatch(postProgressThunk(item));
          setTrashSorted(((prev) => {
            dispatch(deleteTrashThunk(item.id));
            // props.setRandomTrashes(props.randomTrashes.filter((el) => el.id !== item.id));
            dispatch(deleteTrashRandomThunk(item.id));
            return prev.filter((el) => el.id !== item.id);
          }));
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
      <img width="200" height="250" cobject-fit="cover" src={backgroundImage} alt="" />
      {isActive && 'Бросай'}
    </div>
  );
}
