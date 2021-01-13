import React from 'react';
import styles from './landing.module.scss';
import landingImg from '../../assets/imgs/landing.jpg';

const Landing = () => {
  return (
    <div className={styles.landing}>
      <div className={styles.content}>
        <div className={styles.titles}>
          <h5 className={styles.h5}>we work to make</h5>
          <div className={`${styles.h5} ${styles.row}`}>
            Your <h6 className={styles.h6}>dream </h6>
          </div>
          <h5 className={styles.h5}>come true</h5>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad obcaecati
          dolores quibusdam consectetur necessitatibus. Aspernatur hic iure
          nostrum optio corrupti! Perferendis sint error, quas veritatis earum
          suscipit itaque odit perspiciatis.
        </p>
        <button className={styles.btn}> contact us </button>
      </div>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={landingImg} alt={landingImg} />
      </div>
    </div>
  );
};
export default Landing;
