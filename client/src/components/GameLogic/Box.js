/* eslint-disable object-curly-newline */
import React from 'react';
import { useDrag } from 'react-dnd';
import GameRat from '../GameRat/GameRat';
import './GameTrash.css';

const style = {
  // border: '1px dashed gray',
  // backgroundColor: 'transparent',
  // padding: '0.5rem 1rem',
  // marginRight: '1.5rem',
  // marginBottom: '1.5rem',
  // cursor: 'move',
  // float: 'left',
};
// eslint-disable-next-line import/prefer-default-export
export const Box = function Box(props) {
  const { name, itemType, id, visible, setVisible, score, className, image, bonus } = props;
  // console.log(name, itemType, visible, setVisible, setScore, score)
  // console.log('itemType', itemType);
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'box',
    item: { name, itemType, id, score, image, bonus },
    // eslint-disable-next-line max-len
    end: (item, monitor) => { // срабатывает когда заканчиваем перетаскивать, можно добавить логику сюда
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
      {/* это проверка на крысу */}
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
