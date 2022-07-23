import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dustbin2 } from './Dustbin2';
import './GameTrash2.css';
import './conveyor/conveyor.scss';
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
  return (
    <>
      {flag ? (
        <div
          className="photo-album2"
          style={{ overflow: 'hidden', clear: 'both' }}
        >
          <Timer
            props={{
              initialMinute,
              initialSeconds,
              isOpen,
              setIsOpen,
            }}
          />
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
                binName={el.id}
                backgroundImage={el.trash_can_img_src}
                itemType={el.id}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
});

export default Container;
