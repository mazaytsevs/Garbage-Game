import React, { useEffect, useState } from 'react';
import './InfoCloudForHomeless.css';
import { useSelector } from 'react-redux';

function InfoCloudForHomeless() {
  const [flag, setFlag] = useState(false);
  const addedTrash = useSelector(
    (state) => state.addedTrash,
  );
  useEffect(() => {
    setTimeout(() => setFlag(true), 10);
    setTimeout(() => setFlag(false), 4000);
  }, [addedTrash]);

  return (
    <div>
      {addedTrash.name && flag
      && (
      <div className="thought">
        <p>
          Вы открыли новый бонусный предмет:
          {' '}
          <b>{addedTrash.name}</b>
        </p>
        <img className="bonus-img" src={addedTrash.image} alt="бонусный предмет" />
      </div>
      )}
    </div>
  );
}

export default InfoCloudForHomeless;
