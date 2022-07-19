/* eslint-disable object-curly-newline */
import React from 'react';
import { useDrag } from 'react-dnd';
import GameRat from '../components/GameRat/GameRat';
import './GameTrash2.css';

const style = {
  float: 'left',
};
// eslint-disable-next-line import/prefer-default-export
export const Box = function Box(props) {
  const { name, itemType, id, visible, setVisible, score, className, image } = props;
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'box',
    item: { name, itemType, id, score },
    // eslint-disable-next-line max-len
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));
  const opacity = isDragging ? 0.4 : 1;
  const nashClass = `medium polaroid img${className + 1}`;
  return (
    <div ref={drag} style={{ ...style, opacity }}>
      <img
        style={{ width: '65px', height: '100px' }}
        className="divForCursor2"
        cobject-fit="cover"
        src={image}
        alt=""
      />
    </div>
  );
};
