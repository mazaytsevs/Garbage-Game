import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './conveyor.scss';

export default function Conveyor() {
  const trashes = useSelector((s) => s.trashGenerate.trashes);
  const flag = useSelector((s) => s.flag);

  return (
    <div className="room">
      <div className="belt">
        <div className="sushiplate">
          {trashes && flag && trashes.map((el) => ( // сделать по клику
            <span>
              {/* <div className="rice" /> */}
              {/* <div className="salmon" /> */}
              <img style={{ width: '65px', height: '100px' }} src={el.trash_img_src} alt="trash" />
              {/* <div className="seaweed" /> */}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
