import React from 'react';
import { motion } from 'framer-motion';
import styles from './landing.module.scss';
import landingImg from '../../assets/imgs/landing.jpg';
import {
  landingParentAnimation,
  textHorizontalAnimation,
  fadeInAnimation,
  imgAnimation,
} from '../../animations/animation';
import Wave from '../wave/Wave';

const Landing = () => {
  return (
    <div className={styles.landing}>
      <Wave />
      <div className={styles.content}>
        <motion.div
          className={styles.titles}
          variants={landingParentAnimation}
          initial='initial'
          animate='animate'
        >
          <motion.h5 className={styles.h5} variants={textHorizontalAnimation}>
            we work to make
          </motion.h5>
          <motion.div
            className={`${styles.h5} ${styles.row}`}
            variants={textHorizontalAnimation}
          >
            Your <h6 className={styles.h6}>dream </h6>
          </motion.div>
          <motion.h5 className={styles.h5} variants={textHorizontalAnimation}>
            come true
          </motion.h5>
        </motion.div>
        <motion.div
          variants={landingParentAnimation}
          initial='initial'
          animate='animate'
        >
          <motion.p className={styles.desc} variants={fadeInAnimation}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
            obcaecati dolores quibusdam consectetur necessitatibus. Aspernatur
            hic iure nostrum optio corrupti! Perferendis sint error, quas
            veritatis earum suscipit itaque odit perspiciatis.
          </motion.p>
          <motion.button className={styles.btn} variants={fadeInAnimation}>
            contact us
          </motion.button>
        </motion.div>
      </div>
      <motion.div
        className={styles.imgContainer}
        variants={landingParentAnimation}
        initial='initial'
        animate='animate'
      >
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
