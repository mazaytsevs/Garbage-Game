/* eslint-disable import/prefer-default-export */
import React, { useEffect, useSelector } from 'react';
import { useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import { postProgressThunk } from '../../redux/actions/progress.action';
import { deleteTrashThunk } from '../../redux/actions/actions';
import { deleteTrashRandomThunk } from '../../redux/actions/randomTrashAction';
import { getHomelessThunk } from '../../redux/actions/homeless.action';
import { addedTrashThunk } from '../../redux/actions/newAddedTrashAction';

const style = {
  height: '25vh',
  width: '10vw',
  color: 'white',
  padding: '1rem',
  textAlign: 'center',
  fontSize: '1rem',
  lineHeight: 'normal',
  float: 'left',
  position: 'relative',
  zIndex: '300',
};
// комопонент корзины
export function Dustbin(props) {
  const dispatch = useDispatch();

  const { backgroundImage, binName } = props;
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'box',
    // drop сработает когда бросаем итем в корзину, тут добавь удаление итемки,
    // передаю сюда пропсом функцию установки визибл для итема и вызови в ondrop

    drop: (item) => {
      if (item.itemType === binName) {
        dispatch(postProgressThunk(item));
        dispatch(deleteTrashThunk(item.id));
        dispatch(deleteTrashRandomThunk(item.id));
        dispatch(addedTrashThunk(item));
        dispatch(getHomelessThunk());
      }
      return { name: binName };
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  // чтобы вызывать всякую хуйню, которая пришла снаружи, выше, добавляем в этот массив

  const isActive = canDrop && isOver;
  const win = isOver;
  let mozЕransform;
  let webkitTransform;
  let oTransform;
  let msTransform;
  let transform;
  let cursor;

  if (isActive) {
    mozЕransform = 'scale(1.2)';
    webkitTransform = 'scale(1.2)';
    oTransform = 'scale(1.2)';
    msTransform = 'scale(1.2)';
    transform = 'scale(1.2)';
    cursor = 'url(../../../public/glove/grab.png) auto';
  }
  return (
    <div ref={drop} data-testid="dustbin">
      <img
        style={{
          ...style,
          mozЕransform,
          webkitTransform,
          oTransform,
          msTransform,
          transform,
          cursor,
          backgroundRepeat: 'no-repeat',
        }}
        src={backgroundImage}
        alt=""
      />
      {/* {isActive && 'Бросай'} */}
    </div>
  );
}
