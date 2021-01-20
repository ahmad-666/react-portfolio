import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './work.module.scss';
import useScroll from '../../hooks/useScroll';
import { workAnimation, lineAnimation } from '../../animations/animation';

const Work = ({ _id, title, imgSrc }) => {
  const [workElm, workAnimeControl] = useScroll(
    { threshold: 0 },
    'initial',
    'animate'
  );
  const [lineElm, lineAnimationControl] = useScroll(
    {
      threshold: 0,
    },
    'initial',
    'animate'
  );
  return (
    <Link to={`/works/${_id}`} className={styles.work}>
      <motion.div
        ref={workElm}
        variants={workAnimation}
        initial='initial'
        animate={workAnimeControl}
      >
        <h2 className={styles.title}> {title} </h2>
        <motion.div
          className={styles.line}
          ref={lineElm}
          variants={lineAnimation}
          initial='initial'
          animate={lineAnimationControl}
        />
        <img src={imgSrc} alt={imgSrc} className={styles.img} />
      </motion.div>
    </Link>
  );
};
Work.defaultProps = {
  title: '',
  imgSrc: '',
  _id: '',
};
Work.propTypes = {
  title: PropTypes.string,
  imgSrc: PropTypes.string,
  _id: PropTypes.string,
};
export default Work;
