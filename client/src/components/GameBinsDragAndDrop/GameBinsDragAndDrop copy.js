// import React from 'react';
// import './GameBinsDragAndDrop.css';

// function GameBinsDragAndDrop({ trash, trashBins }) {
//   // взятие объекта
//   function dragStartHandler(e, picture) {
//     console.log('drag', picture);
//   }
//   function dragLeaveHandler(e) {
//     e.target.style.background = 'green';
//   }

//   // отпускаем мышь (меняется фон на дефольный)
//   function dragEndHandler(e) {
//     e.target.style.background = 'white';
//   }
//   // навели на другой объект (замена фона у нижнего)
//   function dragOverHandler(e) {
//     e.preventDefault();
//     e.target.style.background = 'lightgray';
//   }
//   function dropHandler(e, bin) {
//     e.preventDefault();
//     console.log('drop', bin);
//     if (bin.id === e.target.trash_can_id) {
//       console.log(true);
//     } else {
//       console.log(false);
//     }
//     e.target.style.background = 'white';
//   }

//   return (
//     <div className="board">
//       <div className="trash">
//         <div className="trashes">
//           {trash?.map((item) => (
//             <div
//               draggable
//               onDragStart={(e) => dragStartHandler(e, item)}
//               onDragLeave={(e) => dragLeaveHandler(e)}
//               onDragEnd={(e) => dragEndHandler(e)}
//               // onDrop={(e) => dropHandler(e, item)}
//               className="trash"
//             >
//               <img
//                 className="randomTrash"
//                 alt="text"
//                 key={item.id}
//                 oneTrashId={item.trash_can_id}
//                 src={item.trash_img_src}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="GameBins">
//         {trashBins && (
//           <div className="gameBinsFromDB">
//             {trashBins?.slice(0, trashBins.length - 1).map((bin) => (
//               <div
//                 onDragStart={(e) => dragStartHandler(e, bin)}
//                 onDragLeave={(e) => dragLeaveHandler(e)}
//                 onDragOver={(e) => dragOverHandler(e)}
//                 onDrop={(e) => dropHandler(e, bin)}
//                 className="trash"
//               >
//                 <img
//                   className="gameBinsFromDB"
//                   alt=""
//                   width="100"
//                   key={bin.id}
//                   trashCanId={bin.id}
//                   src={bin.trash_can_img_src}
//                 />
//               </div>
//             ))}
//           </div>
//         )}
//         <div className="gameBinsDno" />
//       </div>
//     </div>
//   );
// }

// export default GameBinsDragAndDrop;
