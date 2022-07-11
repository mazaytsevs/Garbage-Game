import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateTrashThunk } from '../../redux/actions/actions';
// import Container from '../GameBinsDragAndDrop/Container';
import GameBinsDragAndDrop from '../GameBinsDragAndDrop/GameBinsDragAndDrop';
import GamePictures from '../GamePictures/GamePictures';
import './gameBoard.css';

function GameBoard() {
  const [bagPic, setBagPic] = useState('/trashbag/trashbag.png');
  // для обращения к бэку
  const dispatch = useDispatch();
  const trashes = useSelector((state) => state.trashGenerate?.trashes);
  useEffect(() => {
    // console.log('MUUUUSOOOOOOOOOR', trashes);
    dispatch(generateTrashThunk());
  }, []);

  // функция которая вытаскивает ШЕСТЬ рандомных мусоров из неотгаданных
  function getTrashes(arr) {
    const trashesFromDB = trashes?.length;
    let trashesNum = 0;
    if (trashesFromDB > 10) {
      trashesNum = 10;
    } else {
      trashesNum = trashesFromDB;
    }
    const justSomeArr = [];
    const randomTrashes = [];
    const indexArr = [];
    for (let i = 0; i < trashesFromDB; i += 1) {
      justSomeArr.push(i);
    }
    for (let y = 0; y < trashesNum; y += 1) {
      indexArr.push(justSomeArr.splice(Math.random() * justSomeArr.length, 1));
    }
    for (let x = 0; x < indexArr.length; x += 1) {
      randomTrashes.push(arr[indexArr[x]]);
    }
    return randomTrashes;
  }

  const randomTrashes = getTrashes(trashes);
  console.log('RANDOOOOOOM', getTrashes(trashes));

  const [flag, setFlag] = useState(false);
  const showTrash = () => {
    setFlag(!flag);
    // setBagPic('/trashBins/dangerous.png');
  };

  return (
    <div className="gameBoard">
      <div className="trashBag" onClick={showTrash}>
        <img
          className="bag"
          src={flag
            ? '/trashbag/openTrashBag.png' : '/trashbag/trashbag.png'}
          alt="bag"
        />
      </div>
      {/* <GameBinsDragAndDrop trash={randomTrashes} /> */}
      <GamePictures trash={randomTrashes} />
      {flag
        ? <GameBinsDragAndDrop trash={randomTrashes} /> : null}
    </div>
  );
}

export default GameBoard;
