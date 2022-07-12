/* eslint-disable object-curly-newline */
/* eslint-disable semi */
import React, { useSelector } from 'react';
import { useDrop } from 'react-dnd';
// import { ItemTypes } from './ItemTypes';

const style = {
  height: '12rem',
  width: '12rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  color: 'white',
  // padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
};
// комопонент корзины
// eslint-disable-next-line import/prefer-default-export
export function Dustbin(props) {
  // eslint-disable-next-line object-curly-newline
  const { backgroundImage, binName, score, setScore, trashSorted, setTrashSorted } = props;
  // console.log('binName', binName);
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: 'box',
      // eslint-disable-next-line max-len
      // drop сработает когда бросаем итем в корзину, тут добавь удаление итемки, передаю сюда пропсом функцию установки визибл для итема и вызови в ondrop

      drop: (item) => {
        console.log('======================', item)
        if (item.itemType === binName) {
          setScore(score + 1);
          setTrashSorted(((prev) => prev.filter((el) => el.id !== item.id)))
        }
        return { name: binName };
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
      // eslint-disable-next-line max-len
    }),
    [setScore, score],
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
        ...style,
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
