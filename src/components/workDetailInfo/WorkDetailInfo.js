import React from 'react';
import PropTypes from 'prop-types';
import styles from './workDetailInfo.module.scss';

const WorkDetailInfo = ({ title, desc }) => {
  return (
    <div className={styles.info}>
      <p className={styles.desc}> {desc}</p>
    </div>
  );
};
WorkDetailInfo.defaultProps = {
  title: '',
  desc: '',
};
WorkDetailInfo.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};
export default WorkDetailInfo;
