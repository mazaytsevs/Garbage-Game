import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFlagThunk } from '../../redux/actions/changeFlagAction';
import { Box } from './Box';
import { Dustbin } from './Dustbin';
// import { ItemTypes } from './ItemTypes';
import './GameTrash.css';

const Container = memo(({
  trash, trashBin, refreshTrash, randomTrashes, setRandomTrashes, bomzh,
}) => {
  const dispatch = useDispatch();
  // const flag = useSelector((state) => state.flag);

  // useEffect(() => {
  //   dispatch(changeFlagThunk());
  // }, []);

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
  // const [score, setScore] = useState(0);
  const [visible, setVisible] = useState(visibilityInitState);
  const [trashSorted, setTrashSorted] = useState(trash);

  const [flag, setFlag] = useState(false);
  // const showTrash = () => {
  //   dispatch(changeFlagThunk(!flag));
  //   console.log(flag);
  // };

  // для удаления мусора

  return (
    <div className="garbageForSort">
      <div className="gameBoard">

        <div className="trashBag" onClick={refreshTrash}>
          <img
            className="bag"
            src={
            // flag ?
            // '/trashbag/trashbagOPEN.png'
            //  :
            '/trashbag/trashbagCLOSED.png'
          }
            alt="bag"
            width="200"
          />
        </div>

        {/* {flag ? ( */}
        <div
          className="photo-album"
          style={{ overflow: 'hidden', clear: 'both' }}
        >
          {trash?.map((el, index) => (
            <Box
              score={el.score}
              // setScore={setScore}
              setVisible={setVisible}
              visible={visible[el.id]}
              id={el.id}
              key={el.id}
              name={el.trash_name}
              itemType={el.trash_can_id}
              className={index}
              image={el.trash_img_src}
            />
          ))}
        </div>
        {/* ) : null} */}
      </div>

      {/* <div className="bins">
        <div className="GameBins" style={{ display: 'flex' }}> */}
      {/* {trashBin?.map((el) => (

            <div
              className="photo-album"
              style={{ overflow: 'hidden', clear: 'both' }}
            >
              {trashSorted?.map((el, index) => (
                <Box
                  score={el.score}
                // setScore={setScore}
                  setVisible={setVisible}
                  visible={visible[el.id]}
                  id={el.id}
                  key={el.id}
                  name={el.trash_name}
                  itemType={el.trash_can_id}
                  className={index}
                  image={el.trash_img_src}
                />
              ))}

            </div>
          ) : null} */}
      <div className="bins">
        <div className="GameBins" style={{ display: 'flex' }}>
          {trashBin?.map((el) => (
            <div
              className="gameBinsFromDB"
              key={el.id}
              style={{ overflow: 'hidden', clear: 'both' }}
            >
              <Dustbin
                // score={score}
                // setScore={setScore}
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
      {/* MZ -> начало -> рисую бомжа */}
      <div id="bomzh">
        <Dustbin
          binName={bomzh.id}
          itemType={bomzh.id}
          trashSorted={trashSorted}
          setTrashSorted={setTrashSorted}
          key={bomzh.id}
        />
      </div>
      {/* MZ -> конец -> рисую бомжа */}
    </div>
  );
});

export default Container;
