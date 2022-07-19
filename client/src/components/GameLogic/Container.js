import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box } from './Box';
import { Dustbin } from './Dustbin';
import { getHomelessThunk } from '../../redux/actions/homeless.action';
import './GameTrash.css';
import InfoCloudForHomeless from '../InfoClouds/InfoCloudForHomeless';
import InfoCloudForLocation from '../InfoClouds/InfoCloudForLocation';

// eslint-disable-next-line object-curly-newline
const Container = memo(({ trash, trashBin, refreshTrash, bomzh }) => {
  const [flag, setFlag] = useState(false);

  const dispatch = useDispatch();

  const getVisibilityInitState = () => {
    const res = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const item of trash) {
      res[item.id] = true;
    }
    return res;
    // eslint-disable-next-line max-len
  };

  const visibilityInitState = getVisibilityInitState();
  const [trashSorted, setTrashSorted] = useState(trash);

  return (
    <div className="gameBoard">
      <div className="garbageForSort">
        <div
          className="trashBag"
          onClick={function () {
            setFlag(true);
            refreshTrash();
            setTimeout(() => setFlag(false), 1000);
            dispatch(getHomelessThunk());
          }}
        >
          <img
            className="bag"
            src={
              flag
                ? '/trashbag/trashbagOPEN.png'
                : '/trashbag/trashbagCLOSED.png'
            }
            alt="bag"
            width="200"
          />
        </div>
        <div
          className="photo-album"
          style={{ overflow: 'hidden', clear: 'both' }}
        >
          {trash?.map((el, index) => (
            <Box
              score={el.score}
              bonus={el.bonus}
              id={el.id}
              key={el.id}
              name={el.trash_name}
              itemType={el.trash_can_id}
              className={index}
              image={el.trash_img_src}
            />
          ))}
        </div>
      </div>
      <div className="bins">
        <div className="GameBins" style={{ display: 'flex' }}>
          {trashBin?.map((el) => (
            <div
              className="gameBinsFromDB"
              key={el.id}
              style={{ overflow: 'hidden', clear: 'both' }}
            >
              <Dustbin
                binName={el.id}
                backgroundImage={el.trash_can_img_src}
                itemType={el.id}
                trashSorted={trashSorted}
                setTrashSorted={setTrashSorted}
                key={el.id}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="bomzh">
        <InfoCloudForHomeless />
        <InfoCloudForLocation />
        <Dustbin
          backgroundImage="/man/lol.png"
          binName={bomzh.id}
          itemType={bomzh.id}
          trashSorted={trashSorted}
          setTrashSorted={setTrashSorted}
          key={bomzh.id}
        />
      </div>
    </div>
  );
});

export default Container;
