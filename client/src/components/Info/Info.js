import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import classes from './Info.module.css';
import { getInfoThunk } from '../../redux/actions/actions';
import InfoTrashCard from '../InfoTrashCard/InfoTrashCard';
import infoFromBack from './fakeDB';
import Modal from '../Modal/Modal';
import Load from '../loader/loader';

function Info({ isModal, setModal }) {
  return (
    <div className={classes.infoContainer}>
      <Modal
        isVisible={isModal}
        title={<h1>Инфо о переработке</h1>}
        content={(
          <div>
            <img width="950" alt="page1" src="/infoPics/1.jpg" />
            <img width="950" alt="page2" src="/infoPics/2.jpg" />
            <img width="950" alt="page3" src="/infoPics/3.jpg" />
            <img width="950" alt="page4" src="/infoPics/4.jpg" />
            <img width="950" alt="page5" src="/infoPics/5.jpg" />
            <img width="950" alt="page6" src="/infoPics/6.jpg" />
            <img width="950" alt="page7" src="/infoPics/7.jpg" />
            <img width="950" alt="page8" src="/infoPics/8.jpg" />
            <img width="950" alt="page9" src="/infoPics/9.jpg" />
          </div>
      )}
        // footer={()}
        onClose={() => setModal(false)}
      />

    </div>
  );
}

export default Info;
