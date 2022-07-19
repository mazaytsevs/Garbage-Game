import classes from './loader.module.css';

function Load() {
  return (

    <div className={classes.loaderPage}>
      <div className={classes.loading}>
        <div className={classes.loader} />
        <img className={classes.img} width="100" alt="" src="/modalPics/bottle.png" />
      </div>
    </div>

  );
}

export default Load;
