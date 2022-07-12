import React, { memo, useState } from 'react';
import { Box } from '../components/GameLogic/Box';
import { Dustbin2 } from './Dustbin2';
// import { ItemTypes } from './ItemTypes';
import '../components/GameLogic/GameTrash.css';
import ModalHardMode from './ModalHardMode';
import Timer from './Timer';

const Container = memo(({ trash, trashBin }) => {
  const getVisibilityInitState = () => {
    const res = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const item of trash) {
      res[item.id] = true;
    }
    return res;
    // eslint-disable-next-line max-len
  }; // начальное состояние видимости, по дефолту тру, передавай это в компонент бокс, и если у соответствующего итема будет false то присваивай стиль display: none

  const visibilityInitState = getVisibilityInitState();
  // const [visible, setVisible] = useState(visibilityInitState && '');
  const [score, setScore] = useState(0);
  const [visible, setVisible] = useState(visibilityInitState);

  const [flag, setFlag] = useState(false);
  const showTrash = () => {
    setFlag(!flag);
  };

  const [initialMinute, setInitialMinute] = useState(3);
  const [initialSeconds, setInitialSeconds] = useState(30);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <p>{`ты набрал ${score} баллов`}</p>

      <div className="trashBag" onClick={showTrash}>
        <img
          className="bag"
          src={flag ? '/trashbag/trashbagOPEN.png' : '/trashbag/trashbagCLOSED.png'}
          alt="bag"
          width="200"
        />
      </div>
      {flag ? (
        <div
          className="photo-album"
          style={{ overflow: 'hidden', clear: 'both' }}
        >
          <Timer props={{ initialMinute, initialSeconds, setIsOpen }} />
          {isOpen && <ModalHardMode isOpen={isOpen} setIsOpen={setIsOpen} />}
          {trash?.map((el, index) => (
            <Box
              score={el.score}
              setScore={setScore}
              setVisible={setVisible}
              visible={visible[el.id]}
              id={el.id}
              key={el.name}
              name={el.trash_name}
              itemType={el.trash_can_id}
              className={index}
              image={el.trash_img_src}
            />
          ))}
        </div>
      ) : null}

      <div className="bins">
        <div className="GameBins" style={{ display: 'flex' }}>
          {trashBin?.map((el) => (
            <div
              className="gameBinsFromDB"
              key={el.id}
              style={{ overflow: 'hidden', clear: 'both' }}
            >
              <Dustbin2
                score={score}
                setScore={setScore}
                binName={el.id}
                backgroundImage={el.trash_can_img_src}
                itemType={el.id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Container;
