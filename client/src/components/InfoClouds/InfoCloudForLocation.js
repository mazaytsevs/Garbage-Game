import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './InfoCloudForLocation.css';

function InfoCloudForLocation() {
  const [flag, setFlag] = useState(false);
  const [localProgress, setLocalProgress] = useState(0);

  const progress = useSelector(
    (state) => state.progress,
  );

  useEffect(() => {
    if (+progress.score >= 40 && +progress.score <= 44) {
      setTimeout(() => setFlag(true), 10);
      setTimeout(() => setFlag(false), 4000);
      // setLocalProgress(+progress.score);
    } else if (+progress.score >= 80 && +progress.score <= 84) {
      setTimeout(() => setFlag(true), 10);
      setTimeout(() => setFlag(false), 4000);
      // setLocalProgress(+progress.score);
    }
  }, [progress]);
  console.log(+progress.score >= 40);

  return (
    <div>
      {flag
      && (
      <div className="thought">
        <p>Вы открыли новую локацию!</p>
        {progress.score >= 40
          ? <p>Канализационный люк</p> : progress.score >= 80
        && <p>Рублёвские мусорки</p>}
      </div>
      )}
    </div>
  );
}

export default InfoCloudForLocation;
