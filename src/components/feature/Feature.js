import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './feature.module.scss';

const Feature = ({ icon, title, txt }) => {
  return (
    <div className={styles.feature}>
      <div className={styles.row}>
        <FontAwesomeIcon
          icon={[icon.split(' ')[0], icon.split(' ')[1]]}
          size='3x'
          className={styles.icon}
        />
        <h5 className={styles.title}> {title} </h5>
      </div>
      <p className={styles.content}>{txt}</p>
    </div>
  );
};
Feature.defaultProps = {
  icon: '',
  title: '',
  txt: '',
};
Feature.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  txt: PropTypes.string,
};
export default Feature;
