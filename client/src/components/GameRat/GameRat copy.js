import React from 'react';
import './gameRat.css';

function GameRat() {
  return (
    <div>
      <section className="section-fly ">
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
      </section>
    </div>
  );
}

export default GameRat;
