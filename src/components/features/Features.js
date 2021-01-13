import React, { useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import styles from './features.module.scss';
import Feature from '../feature/Feature';
import featuresImg from '../../assets/imgs/features.jpg';

const Features = ({ features, setFeatures }) => {
  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const featuresRes = await axios.get('/data/features.json');
        setFeatures(featuresRes.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchFeatures();
  }, []);
  return (
    <div className={styles.featuresContainer}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={featuresImg} alt={featuresImg} />
      </div>
      <div className={styles.features}>
        {features.map(feature => (
          <Feature
            key={feature._id}
            icon={feature.icon}
            title={feature.title}
            txt={feature.txt}
          />
        ))}
      </div>
    </div>
  );
};
Features.defaultProps = {
  features: [],
};
Features.propTypes = {
  features: PropTypes.array,
  setFeatures: PropTypes.func.isRequired,
};
export default Features;
