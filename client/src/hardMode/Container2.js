import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '../components/GameLogic/Box';
import { Dustbin2 } from './Dustbin2';
// import { ItemTypes } from './ItemTypes';
import './GameTrash2.css';
import './conveyor/conveyor.scss';
import ModalHardMode from './ModalHardMode';
import Timer from './Timer';

const Container = memo(({ trashBin, bomzh }) => {
  const dispatch = useDispatch();
  const flag = useSelector((s) => s.flag);
  const showTrash = () => {
    if (flag) {
      dispatch({ type: 'FLAG_CLOSE' });
    } else {
      dispatch({ type: 'FLAG_OPEN' });
    }
  };

  const [initialMinute, setInitialMinute] = useState(0);
  const [initialSeconds, setInitialSeconds] = useState(30);
  const [isOpen, setIsOpen] = useState(false);
  // const [trashSorted, setTrashSorted] = useState(trash);
  return (
    <>
      {/* <p>{`ты набрал ${score} баллов`}</p> */}

      {/* <div className="trashBag" onClick={showTrash}> */}
      {/* <img
          className="bag"
          src={flag ? '/trashbag/trashbagOPEN.png' : '/trashbag/trashbagCLOSED.png'}
          alt="bag"
          width="200"
        /> */}
      {/* </div> */}

      {flag ? (
        <div
          className="photo-album2"
          style={{ overflow: 'hidden', clear: 'both' }}
        >
          <Timer props={{
            initialMinute, initialSeconds, isOpen, setIsOpen,
          }}
          />
          {/* {isOpen && <ModalHardMode isOpen={isOpen} setIsOpen={setIsOpen} />} */}
        </div>
      ) : (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button type="button" className="primaryBtnStart" onClick={showTrash}>
            НАЧАТЬ
          </button>
        </div>
      )}

      <div className="bins">
        <div className="GameBins" style={{ display: 'flex' }}>
          {trashBin?.map((el) => (
            <div
              className="gameBinsFromDB"
              key={el.id}
              style={{ overflow: 'hidden', clear: 'both' }}
            >
              <Dustbin2
                score={el.score}
                // setScore={setScore}
                binName={el.id}
                backgroundImage={el.trash_can_img_src}
                itemType={el.id}
              />
            </div>
          ))}
        </div>
        {/* <div id="bomzh">
          <Dustbin2
            binName={bomzh.id}
            itemType={bomzh.id}
            // trashSorted={trashSorted}
            // setTrashSorted={setTrashSorted}
            key={bomzh.id}
          />
        </div> */}
      </div>
    </>
  );
});

export default Container;
