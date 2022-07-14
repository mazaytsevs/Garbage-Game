/* eslint-disable import/prefer-default-export */
export function getTrashes(arr) {
  // console.log(arr);
  const trashesFromDB = arr.length;
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
