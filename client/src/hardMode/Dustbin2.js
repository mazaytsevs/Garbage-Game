import '../components/GameLogic/Dustbin.css'; // стили перенесла сюда!!!

import React, { useSelector } from 'react';
import { useDispatch } from 'react-redux';

import { useDrop } from 'react-dnd';
import { postTimeProgressThunk } from '../redux/actions/timeProgress.action';
import { deleteTrashThunk } from '../redux/actions/actions';

// комопонент корзины
// eslint-disable-next-line import/prefer-default-export
export function Dustbin2(props) {
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
          dispatch(deleteTrashThunk(item.id));
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
  let boxShadow;
  if (isActive) {
    boxShadow = '10px 5px 5px red';
  }
  const style = {
    // height: '25vh',
    // width: '10vw',
    // marginRight: '1.5rem',
    // marginBottom: '1.5rem',
    // color: 'white',
    // padding: '1rem',
    // textAlign: 'center',
    // fontSize: '1rem',
    // lineHeight: 'normal',
    float: 'left',
  };
  return (
    <div
      ref={drop}
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
          boxShadow,
          // backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: 'no-repeat',
        }}
      />
      {isActive && 'Бросай'}
    </div>
  );
}
