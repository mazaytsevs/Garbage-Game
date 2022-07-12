import { useState } from 'react';
import classes from './loader.module.css';

function Load() {
  // const [loading, setLoading] = useState(true);
  // const componentDidMount = () => {
  //   setTimeout(() => setLoading(false), 4000); // do your async call
  // };

  // componentDidMount();

  return (
  // <div className={classes.smth}>
  //   {loading
  //     ? (
    <div className={classes.loaderPage}>
      <div className={classes.loading}>
        <div className={classes.loader} />
        <img className={classes.img} width="100" alt="" src="/modalPics/bottle.png" />
      </div>
    </div>
  // )
  //     : null}
  // </div>
  );
}

export default Load;
