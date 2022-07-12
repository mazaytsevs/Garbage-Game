import './Dustbin.css'; // стили перенесла сюда!!!

import React, { useSelector } from 'react';
import { useDispatch } from 'react-redux';

import { useDrop } from 'react-dnd';
import { postProgressThunk } from '../../redux/actions/progress.action';
import { deleteTrashThunk } from '../../redux/actions/actions';

// комопонент корзины
// eslint-disable-next-line import/prefer-default-export
export function Dustbin(props) {
  const dispatch = useDispatch();
  // eslint-disable-next-line object-curly-newline
  const { backgroundImage, binName, score, trashSorted, setTrashSorted } = props;
  // console.log('binName', binName);
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: 'box',
      // eslint-disable-next-line max-len
      // drop сработает когда бросаем итем в корзину, тут добавь удаление итемки, передаю сюда пропсом функцию установки визибл для итема и вызови в ondrop

      drop: (item) => {
        if (item.itemType === binName) {
          dispatch(postProgressThunk(item));
          setTrashSorted(((prev) => {
            dispatch(deleteTrashThunk(item.id));
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
        // ...style,
        boxShadow,
        // backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
      }}
      data-testid="dustbin"
    >
      <img width="200" height="250" cobject-fit="cover" src={backgroundImage} alt="" />
      {isActive && 'Бросай'}
    </div>
  );
}
