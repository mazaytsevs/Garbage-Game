import React, { useSelector } from 'react';
import { useDispatch } from 'react-redux';

import { useDrop } from 'react-dnd';
import { postTimeProgressThunk } from '../redux/actions/timeProgress.action';
import { deleteTimeTrashThunk } from '../redux/actions/trashTimeAction';

// комопонент корзины
// eslint-disable-next-line import/prefer-default-export
export function Dustbin2(props) {
  const style = {
    height: '25vh',
    width: '12vw',
    // marginRight: '1.5rem',
    // marginBottom: '1.5rem',
    color: 'white',
    padding: '2rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
  };
  const dispatch = useDispatch();
  // eslint-disable-next-line object-curly-newline
  const { backgroundImage, binName, score, trashSorted, setTrashSorted, setScore } = props;
  // console.log('binName', binName);
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: 'box',
      // eslint-disable-next-line max-len
      // drop сработает когда бросаем итем в корзину, тут добавь удаление итемки, передаю сюда пропсом функцию установки визибл для итема и вызови в ondrop

      drop: (item) => {
        if (item.itemType === binName) {
          // setScore(score + 1);
          console.log('item', item);
          dispatch(postTimeProgressThunk(item));
          dispatch(deleteTimeTrashThunk(item.id));
          // setTrashSorted(((prev) => prev.filter((el) => el.id !== item.id)));
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
  const win = isOver;
  let mozЕransform;
  let webkitTransform;
  let oTransform;
  let msTransform;
  let transform;

  if (isActive) {
    mozЕransform = 'scale(1.2)';
    webkitTransform = 'scale(1.2)';
    oTransform = 'scale(1.2)';
    msTransform = 'scale(1.2)';
    transform = 'scale(1.2)';
  }

  return (
    <div
      ref={drop}
      style={{
        ...style,
        mozЕransform,
        webkitTransform,
        oTransform,
        msTransform,
        transform,
        backgroundRepeat: 'no-repeat',
      }}
      data-testid="dustbin"
    >
      {/* <img width="200" height="250" cobject-fit="cover" src={backgroundImage} alt="" /> */}
      <img
        width="200"
        height="250"
        cobject-fit="cover"
        src={backgroundImage}
        alt=""
        style={{
          ...style,
          // backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
        }}
      />
      {isActive && 'Бросай'}
    </div>
  );
}
