import React from 'react';
import './gameBoard.css';

function GameBoard() {
  return (
    <div className="gameBoard">
      <div className="trashBag">
        <img
          className="bag"
          src="https://img.freepik.com/premium-vector/garbage-bags-with-waste-around-vector-flat-illustration_650087-179.jpg?w=740"
          alt="bag"
        />
      </div>
      <div className="trash">
        <img
          className="randomTrash"
          src="https://img.freepik.com/free-vector/set-of-waste-elements_1308-27157.jpg?t=st=1657202255~exp=1657202855~hmac=8519a60d2edc0f8dad06c81666452d1a491a4d15a395b7ef844f814d32697a2a&w=740"
          alt="trash"
        />
      </div>
    </div>
  );
}

export default GameBoard;
