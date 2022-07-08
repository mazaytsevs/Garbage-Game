import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoThunk } from '../../redux/actions/actions';
import InfoTrashCard from '../InfoTrashCard/InfoTrashCard';
import infoFromBack from './fakeDB';

function Info() {
  // для обращения к бэку
  // const dispatch = useDispatch();
  // const info = useSelector((state) => state.info);
  // useEffect(() => {
  //   dispatch(getInfoThunk());
  // }, []);
  // для фейковой дб
  const info = infoFromBack;
  return (
    <div className="infoContainer">
      {info.map((el) => (
        <InfoTrashCard
          key={el.id}
          name={el.trash_can_name}
          img={el.trash_can_img_src}
          info={el.trash_can_info}
          trashes={el.trashes}
        />
      ))}
    </div>
  );
}

export default Info;
