import React, { useState } from 'react';
import './GameBinsDragAndDrop.css';

function GameBinsDragAndDrop({ trash, trashBins }) {
  // const [trash, SetTrash] = useState([
  //   { id: 1, order: 3, text: 'card 3' },
  //   { id: 2, order: 1, text: 'card 1' },
  //   { id: 3, order: 2, text: 'card 2' },
  //   { id: 4, order: 4, text: 'card 4' },
  // ]);

  const [currentState, setCurrentState] = useState(null);

  // взятие объекта
  function dragStartHandler(e, picture) {
    console.log('drag', picture);
    setCurrentState(picture);
  }
  function dragLeaveHandler(e) {}

  // отпускаем мышь (меняется фон на дефольный)
  function dragEndHandler(e) {
    e.target.style.background = 'white';
  }
  // навели на другой объект (замена фона у нижнего)
  function dragOverHandler(e) {
    e.preventDefault();
    e.target.style.background = 'lightgray';
  }
  function dropHandler(e, picture) {
    e.preventDefault();
    console.log('drop', picture);
    // if()
    //     if (t.id === trash.id) {
    //       return { ...t, order: currentState.order };
    //     }
    //     if (t.id === currentState.id) {
    //       return { ...t, order: card.order };
    //     }
    //     return t;
    //   }),
    // );
    e.target.style.background = 'white';
  }

  const sortCards = (a, b) => {
    if (a.order > b.order) {
      return 1;
    }
    return -1;
  };

  return (
    <div className="trash">
      <div className="trashes">
        {trash?.map((pic) => (
          <div
            draggable
            onDragStart={(e) => dragStartHandler(e, pic)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, pic)}
            className="trash"
          >
            <img className="randomTrash" alt="text" key={pic.id} oneTrashId={pic.trash_can_id} src={pic.trash_img_src} />
          </div>
        ))}
        {trashBins?.map((pic) => (
          <div
            draggable
            onDragStart={(e) => dragStartHandler(e, pic)}
            onDragLeave={(e) => dragLeaveHandler(e)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDragOver={(e) => dragOverHandler(e)}
            onDrop={(e) => dropHandler(e, pic)}
            className="trash"
          >
            <img className="gameBinsFromDB" alt="" width="100" key={pic.id} trashCanId={pic.id} src={pic.trash_can_img_src} />
          </div>
        ))}
      </div>
      <div />
    </div>
  );
}

export default GameBinsDragAndDrop;
