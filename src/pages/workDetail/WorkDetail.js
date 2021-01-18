import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styles from './workDetail.module.scss';
import WorkDetailLanding from '../../components/workDetailLanding/WorkDetailsLanding';
import WorkDetailInfo from '../../components/workDetailInfo/WorkDetailInfo';
import WorkDetailImgs from '../../components/workDetailImgs/WorkDetailImgs';
import WorkDetailActiveImg from '../../components/workDetailActiveImg/WorkDetailActiveImg';
import { pageAnimation } from '../../animations/animation';

const WorkDetail = ({ match }) => {
  const [work, setWork] = useState(null);
  const [activeImg, setActiveImg] = useState(null);
  useEffect(() => {
    const fetchWork = async () => {
      try {
        const workRes = await axios.get('/data/works.json');
        const works = workRes.data;
        const currWork = works.filter(w => w._id === match.params.id)[0];
        setWork(currWork);
      } catch (err) {
        console.error(err);
      }
    };
    fetchWork();
  }, []);
  return (
    <>
      <motion.div
        className={styles.work}
        variants={pageAnimation}
        initial='initial'
        animate='animate'
        exit='exit'
      >
        {work && (
          <>
            <WorkDetailLanding imgSrc={work.imgSrc} title={work.title} />
            <WorkDetailInfo title={work.title} desc={work.desc} />
            <WorkDetailImgs imgs={work.imgs} setActiveImg={setActiveImg} />
          </>
        )}
      </motion.div>
      {activeImg && (
        <WorkDetailActiveImg imgSrc={activeImg} setActiveImg={setActiveImg} />
      )}
    </>
  );
};
WorkDetail.defaultProps = {
  match: {},
};
WorkDetail.propTypes = {
  match: PropTypes.object,
};
export default WorkDetail;
