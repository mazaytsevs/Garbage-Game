import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classes from './Info.module.css';
import { getInfoThunk } from '../../redux/actions/actions';
import InfoTrashCard from '../InfoTrashCard/InfoTrashCard';
import infoFromBack from './fakeDB';
import Modal from '../Modal/Modal';

function Info() {
  // для обращения к бэку
  // const dispatch = useDispatch();
  // const info = useSelector((state) => state.info);
  // useEffect(() => {
  //   console.log(info);
  //   dispatch(getInfoThunk());
  // }, []);
  // для фейковой дб
  // const info = infoFromBack;

  // modal
  const [isModal, setModal] = React.useState(false);

  return (
    <div className={classes.infoContainer}>
      <button type="button" onClick={() => setModal(true)}>УЗНАТЬ ИНФО</button>
      <Modal
        isVisible={isModal}
        title="это наша инфа"
        content={(
          <div>
            <img width="1000" alt="page1" src="/infoPics/1.jpg" />
            <img width="1000" alt="page2" src="/infoPics/2.jpg" />
            <img width="1000" alt="page3" src="/infoPics/3.jpg" />
            <img width="1000" alt="page4" src="/infoPics/4.jpg" />
            <img width="1000" alt="page5" src="/infoPics/5.jpg" />
            <img width="1000" alt="page5" src="/infoPics/6.jpg" />
            <img width="1000" alt="page5" src="/infoPics/7.jpg" />
            <img width="1000" alt="page5" src="/infoPics/8.jpg" />
            <img width="1000" alt="page5" src="/infoPics/9.jpg" />
          </div>
      )}
        footer={<button type="button" onClick={() => setModal(false)}> OK </button>}
        onClose={() => setModal(false)}
      />

    </div>
    // <div className="infoContainer">
    //   {info.map((el) => (
    //     <InfoTrashCard
    //       key={el?.id}
    //       name={el?.trash_can_name}
    //       img={el?.trash_can_img_src}
    //       info={el?.trash_can_info}
    //       trashes={el?.trashes}
    //     />
    //   ))}
    // </div>
  );
}

export default Info;
