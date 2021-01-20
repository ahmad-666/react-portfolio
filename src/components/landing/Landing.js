import React from 'react';
import { motion } from 'framer-motion';
import styles from './landing.module.scss';
import landingImg from '../../assets/imgs/landing.jpg';
import Wave from '../wave/Wave';
import {
  horizontalOffsetAnimation,
  landingTextParentAnimation,
  fadeIn,
  descParentAnime,
  imgAnimation,
  imgParentAnimation,
} from '../../animations/animation';

const Landing = () => {
  return (
    <div className={styles.landing}>
      <Wave />
      <div className={styles.content}>
        <motion.div
          className={styles.titles}
          variants={landingTextParentAnimation}
        >
          <motion.h5 className={styles.h5} variants={horizontalOffsetAnimation}>
            we work to make
          </motion.h5>
          <motion.div
            className={`${styles.h5} ${styles.row}`}
            variants={horizontalOffsetAnimation}
          >
            Your <h6 className={styles.h6}>dream </h6>
          </motion.div>
          <motion.h5 className={styles.h5} variants={horizontalOffsetAnimation}>
            come true
          </motion.h5>
        </motion.div>
        <motion.div variants={descParentAnime}>
          <motion.p className={styles.desc} variants={fadeIn}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
            obcaecati dolores quibusdam consectetur necessitatibus. Aspernatur
            hic iure nostrum optio corrupti! Perferendis sint error, quas
            veritatis earum suscipit itaque odit perspiciatis.
          </motion.p>
          <motion.button className={styles.btn} variants={fadeIn}>
            contact us
          </motion.button>
        </motion.div>
      </div>
      <motion.div className={styles.imgContainer} variants={imgParentAnimation}>
        <motion.img
          className={styles.img}
          src={landingImg}
          alt={landingImg}
          variants={imgAnimation}
        />
      </motion.div>
    </div>
  );
};
export default Landing;
