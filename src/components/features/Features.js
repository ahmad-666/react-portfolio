import React, { useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styles from './features.module.scss';
import Feature from '../feature/Feature';
import featuresImg from '../../assets/imgs/features.jpg';
import { faqsAnimation } from '../../animations/animation';
import useScroll from '../../hooks/useScroll';

const Features = ({ features, setFeatures }) => {
  const [elm, animeControl] = useScroll(
    {
      threshold: 0.5,
      triggerOnce: false,
      delay: 0,
      initialInView: false,
    },
    'initial',
    'animate'
  );
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
    <motion.div
      className={styles.featuresContainer}
      ref={elm}
      variants={faqsAnimation}
      animate={animeControl}
      initial='initial'
    >
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
    </motion.div>
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
