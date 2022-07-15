import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './conveyor.scss';
import { Box } from '../Box2';
import { Dustbin2 } from '../Dustbin2';

export default function Conveyor() {
  const trashes = useSelector((s) => s.trashTime.trashes);
  const flag = useSelector((s) => s.flag);

  const trashBinsFromDB = useSelector(
    (state) => state.trashGenerate?.trashCans,
  );
  const trashWithoutMan = trashBinsFromDB?.slice(0, trashBinsFromDB.length - 1);

  return (
    <div style={{ position: flag ? 'absolute' : 'relative' }} className="room">
      <div className="belt">
        <div className="sushiplate">
          {trashes && flag && trashes.map((el) => ( // сделать по клику
            <span>
              <Box
                style={{ width: '65px', height: '100px' }}
                score={el.score}
                id={el.id}
                key={el.id}
                // name={el.trash_name}
                itemType={el.trash_can_id}
                image={el.trash_img_src}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
