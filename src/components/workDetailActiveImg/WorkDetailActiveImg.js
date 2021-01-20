import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styles from './workDetailActiveImg.module.scss';
import { blackFilterAnimation } from '../../animations/animation';

const WorkDetailActiveImg = ({ imgSrc, setActiveImg }) => {
  const blackFilterElm = useRef(null);
  return (
    <motion.div
      variants={blackFilterAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
      ref={blackFilterElm}
      className={styles.blackFilter}
      onClick={e => {
        if (e.target === blackFilterElm.current) {
          document.body.classList.remove('disableScroll');
          setActiveImg(null);
        }
      }}
    >
      <img src={imgSrc} alt={imgSrc} className={styles.img} />
    </motion.div>
  );
};
WorkDetailActiveImg.defaultProps = {
  imgSrc: '',
  setActiveImg: () => {},
};
WorkDetailActiveImg.propTypes = {
  imgSrc: PropTypes.string,
  setActiveImg: PropTypes.func,
};
export default WorkDetailActiveImg;
