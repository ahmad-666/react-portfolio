import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import styles from './works.module.scss';
import Work from '../../components/work/Work';
import {
  pageAnimation,
  layersParentAnimation,
  layerAnimation,
  worksParentAnimation,
} from '../../animations/animation';

const layers = ['#f48fb1 ', '#9fa8da', '#80cbc4', '#aed581'];
const Works = () => {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const worksRes = await axios.get(
          `${process.env.PUBLIC_URL}/data/works.json`
        );
        setWorks(worksRes.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchWorks();
  }, []);
  return (
    <>
      <motion.div
        variants={layersParentAnimation}
        initial='initial'
        animate='animate'
      >
        {layers.map((layer, i) => (
          <motion.div
            variants={layerAnimation}
            key={i}
            style={{ backgroundColor: layer }}
            className={styles.layer}
          />
        ))}
      </motion.div>
      <motion.div
        className={styles.worksContainer}
        variants={pageAnimation}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        <motion.div variants={worksParentAnimation}>
          <h5 className={styles.title}> our works </h5>
          <div className={styles.works}>
            {works.map(work => (
              <Work
                key={work._id}
                title={work.title}
                imgSrc={work.imgSrc}
                _id={work._id}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};
export default Works;
