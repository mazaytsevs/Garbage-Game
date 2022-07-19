/* eslint-disable object-curly-newline */
import React from 'react';
import { useDrag } from 'react-dnd';
import './GameTrash.css';

const style = {
};
// eslint-disable-next-line import/prefer-default-export
export const Box = function Box(props) {
  const { name, itemType, id, score, className, image, bonus } = props;
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'box',
    item: { name, itemType, id, score, image, bonus },
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
    <div className="divForCursor">
      {id === 58
        ? (
          <div ref={drag} style={{ ...style, opacity }} id="sprite-container">
            <div id="sprite-image" />
          </div>
        )
        : (
          <div className={nashClass} ref={drag} style={{ ...style, opacity }}>
            {/* {name} */}
            <img cobject-fit="cover" src={image} alt="" />
          </div>
        )}
    </div>
  );
};
