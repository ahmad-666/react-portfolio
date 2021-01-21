import React from 'react';
import PropTypes from 'prop-types';
import styles from './workDetailLanding.module.scss';

const WorkDetailLanding = ({ imgSrc, title }) => {
  return (
    <div className={styles.landing}>
      <img
        src={`${process.env.PUBLIC_URL}${imgSrc}`}
        alt={imgSrc}
        className={styles.img}
      />
      <h2 className={styles.title}> {title} </h2>
    </div>
  );
};
WorkDetailLanding.defaultProps = {
  imgSrc: '',
  title: '',
};
WorkDetailLanding.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
};
export default WorkDetailLanding;
