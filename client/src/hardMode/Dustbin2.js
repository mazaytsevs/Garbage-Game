import React, { useSelector } from 'react';
import { useDispatch } from 'react-redux';

import { useDrop } from 'react-dnd';
import { postTimeProgressThunk } from '../redux/actions/timeProgress.action';
import { deleteTimeTrashThunk } from '../redux/actions/trashTimeAction';

// eslint-disable-next-line import/prefer-default-export
export function Dustbin2(props) {
  const style = {
    height: '25vh',
    width: '12vw',
    color: 'white',
    padding: '2rem',
    textAlign: 'center',
    fontSize: '1rem',
    lineHeight: 'normal',
    float: 'left',
  };
  const dispatch = useDispatch();
  // eslint-disable-next-line object-curly-newline
  const {
    backgroundImage,
    binName,
    score,
    trashSorted,
    setTrashSorted,
    setScore,
  } = props;
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: 'box',
    // eslint-disable-next-line max-len
    drop: (item) => {
      if (item.itemType === binName) {
        console.log('item', item);
        dispatch(postTimeProgressThunk(item));
        dispatch(deleteTimeTrashThunk(item.id));
      }
      return { name: binName };
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));

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
      <img
        width="200"
        height="250"
        cobject-fit="cover"
        src={backgroundImage}
        alt=""
        style={{
          ...style,
          backgroundRepeat: 'no-repeat',
        }}
      />
      {isActive && 'Бросай'}
    </div>
  );
}
