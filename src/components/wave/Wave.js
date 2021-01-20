import React from 'react';
import { motion } from 'framer-motion';
import styles from './wave.module.scss';
import { waveAnimation } from '../../animations/animation';

const Wave = () => {
  return (
    <svg
      className={styles.svg}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 1440 320'
    >
      <motion.path
        variants={waveAnimation}
        className={styles.path}
        fill='transparent'
        strokeWidth={10}
        stroke='red'
        d='M0,160L48,133.3C96,107,192,53,288,53.3C384,53,480,107,576,154.7C672,203,768,245,864,256C960,267,1056,245,1152,202.7C1248,160,1344,96,1392,64L1440,32L1440,35'
      />
    </svg>
  );
};
export default Wave;
