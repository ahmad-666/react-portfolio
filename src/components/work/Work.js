import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './work.module.scss';

const Work = ({ _id, title, imgSrc }) => {
  return (
    <Link to={`/works/${_id}`} className={styles.work}>
      <h2 className={styles.title}> {title} </h2>
      <div className={styles.line} />
      <img src={imgSrc} alt={imgSrc} className={styles.img} />
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
