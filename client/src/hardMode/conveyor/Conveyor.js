import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './conveyor.scss';

export default function Conveyor() {
  const trashes = useSelector((s) => s.trashGenerate.trashes);

  return (
    <div className="room">
      <div className="belt">
        <div className="sushiplate">
          {trashes && trashes.map((el) => ( // сделать по клику
            <span>
              {/* <div className="rice" /> */}
              {/* <div className="salmon" /> */}
              <img style={{ width: '100px' }} src={el.trash_img_src} alt="trash" />
              {/* <div className="seaweed" /> */}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
