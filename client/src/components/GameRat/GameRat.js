import React, { useState } from 'react';
import './gameRat.css';

const myArr = [
  { id: 1, name: 'cat' },
  { id: 2, name: 'rat' },
  { id: 3, name: 'dog' },
  { id: 4, name: 'rabbit' },
];

function GameRat() {
  // const [running, setRunning] = useState(false);

  // const componentRat = () => {
  //   setTimeout(() => setRunning(true), 4000); // do your async call
  // };

  const ratLooks = (
    <div className="sprite-image" />
    // running
    //   ? (
    // <section className="section-fly ">
    //   <div className="container position-relative">
    //     <div className="fly-obj">
    //       <i className="fab fa-affiliatetheme">
    //         <img
    //           className="rat"
    //           alt="text"
    //           src="./rat/rat.png"
    //         />
    //       </i>
    //     </div>
    //   </div>
    // </section>
  );
  // : (
  //   <img
  //     className="rat"
  //     alt="text"
  //     src="./rat/rat.png"
  //   />
  // )
  // );
  // componentRat();
  return (
    <div>
      {/* катин код */}
      {/* <section className="section-fly ">
        <div className="container position-relative">
          <div className="fly-obj">
            <i className="fab fa-affiliatetheme">
              <img
                className="rat"
                alt="text"
                src="./rat/rat.png"
              />
            </i>
          </div>
        </div>
      </section> */}
      {/* код где происходит провекра на крысу  */}
      {/* {myArr.map((el) => {
        if (el.id !== 2) {
          return (
            <div key={el.id}>
              {el.name}
            </div>
          );
        }
        if (el.id === 2) {
          return (
            <div key={el.id} className="sprite-container">
              {ratLooks}
            </div>
          );
        }
        return null;
      })} */}
      {/* код где картинка двигается  */}
      <div className="sprite-container">
        <div className="sprite-image" />
      </div>
    </div>
  );
}

export default GameRat;
