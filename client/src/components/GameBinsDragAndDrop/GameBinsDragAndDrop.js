import React, { useState, View } from 'react';
import './GameBinsDragAndDrop.css';

function GameBinsDragAndDrop({ trash, trashBins }) {
  const [current, setCurrent] = useState(null);
  console.log('current', current);
  // взятие объекта
  function dragStartHandler(e, picture) {
    console.log('drag', picture);
    setCurrent(picture);
  }
  function dragLeaveHandler(e) {
    // e.target.style.background = 'green';
  }

  // отпускаем мышь (меняется фон на дефольный)
  function dragEndHandler(e) {
    // e.target.style.background = 'white';
  }
  // навели на другой объект (замена фона у нижнего)
  function dragOverHandler(e) {
    e.preventDefault();
    // e.target.style.background = 'lightgray';
  }
  function dropHandler(e, bin) {
    e.preventDefault();
    console.log('drop', bin);
    console.log('current', current);
    if (bin.id === current?.trash_can_id) {
      console.log(true);
    } else {
      console.log(false);
    }
    // e.target.style.background = 'white';
  }

  return (
    <div className="board">
      <div className="trash">
        <div className="trashes">
          {trash?.map((item) => (
            <div
              binID={item.trash_can_id}
              key={item.id}
              draggable
              // срабатывает, когда берешь карту
              onDragStart={(e) => dragStartHandler(e, item)}
              // срабатывает, если мы вышли за пределы другой карточки
              onDragLeave={(e) => dragLeaveHandler(e)}
              // если опустили перемещение
              onDragEnd={(e) => dragEndHandler(e)}
              // если находимся над каким-то другим элементом
              onDragOver={(e) => dragOverHandler(e)}
              // если мы опустили мусор и должно произойти какое-то событие
              onDrop={(e) => dropHandler(e, item)}
              className="trash"
            >
              <img
                className="randomTrash"
                alt="text"
                key={item.id}
                // oneTrashId={item.trash_can_id}
                src={item.trash_img_src}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="GameBins">
        {trashBins && (
          <div className="gameBinsFromDB">
            {trashBins?.slice(0, trashBins.length - 1).map((bin) => (
              <div
                key={bin.id}
                className="trash"
                // если находимся над каким-то другим элементом
                // onDragOver={(e) => dragOverHandler(e)}
                // если мы опустили мусор и должно произойти какое-то событие
                // onDrop={(e) => dropHandler(e, bin)}
              >
                <img
                  className="gameBinsFromDB"
                  alt=""
                  width="100"
                  key={bin.id}
                  // trashCanId={bin.id}
                  src={bin.trash_can_img_src}
                />
              </div>
            ))}
          </div>
        )}
        <div className="gameBinsDno" />
      </div>
    </div>
  );
}

export default GameBinsDragAndDrop;
