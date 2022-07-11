import React from 'react';
import './GamePictures.css';

function GamePictures({ trash }) {
  return (
    <div>
      <div className="photo-album">
        <a href="" className="medium polaroid img1">
          <img object-fit="cover" src={trash[0]?.trash_img_src} alt="" />
        </a>
        <a href="" className="medium polaroid img3">
          <img cobject-fit="cover" src={trash[1]?.trash_img_src} alt="" />
        </a>
        <a href="" className="medium polaroid img4">
          <img cobject-fit="cover" src={trash[2]?.trash_img_src} alt="" />
        </a>
        <a href="" className="medium polaroid img6">
          <img cobject-fit="cover" src={trash[3]?.trash_img_src} alt="" />
        </a>
        <a href="" className="medium polaroid img7">
          <img cobject-fit="cover" src={trash[4]?.trash_img_src} alt="" />
        </a>
        <a href="" className="medium polaroid img8">
          <img cobject-fit="cover" src={trash[5]?.trash_img_src} alt="" />
        </a>
        <a href="" className="medium polaroid img9">
          <img cobject-fit="cover" src={trash[6]?.trash_img_src} alt="" />
        </a>
        <a href="" className="medium polaroid img10">
          <img cobject-fit="cover" src={trash[7]?.trash_img_src} alt="" />
        </a>
        <a href="" className="medium polaroid img12">
          <img cobject-fit="cover" src={trash[8]?.trash_img_src} alt="" />
        </a>
        <a href="" className="medium polaroid img15">
          <img cobject-fit="cover" src={trash[9]?.trash_img_src} alt="" />
        </a>
      </div>
    </div>
  );
}

export default GamePictures;
