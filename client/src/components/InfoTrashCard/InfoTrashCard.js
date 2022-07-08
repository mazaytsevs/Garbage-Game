import React from 'react';

function InfoTrashCard({
  name, img, info, trashes,
}) {
  const path = '/Garbage-Game/client/src/picturesMariaZob/';
  return (
    <div className="infoCard">
      <div className="header">
        <div className="imageContainer">
          <img alt="" src={img} />
        </div>
        <h1>{name}</h1>
      </div>
      <div className="trashText">
        <span>{info}</span>
      </div>
      <div className="trashesExamples">
        <span>
          {trashes.map((el) => (
            <div className="correctTrash">
              <img alt="" src={el.trash_img_src} />
              <div>{el.trash_name}</div>
            </div>
          ))}
        </span>
        <div className="incorrectTrash">SMTH BAD</div>
      </div>
    </div>
  );
}

export default InfoTrashCard;
