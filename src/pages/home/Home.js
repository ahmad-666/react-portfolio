import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Landing from '../../components/landing/Landing';
import Features from '../../components/features/Features';
import Faqs from '../../components/faqs/Faqs';
import { pageAnimation } from '../../animations/animation';

const Home = () => {
  const [features, setFeatures] = useState([]);
  const [faqs, setFaqs] = useState([]);
  return (
    <motion.div
      variants={pageAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <Landing />
      <Features features={features} setFeatures={setFeatures} />
      <Faqs faqs={faqs} setFaqs={setFaqs} />
    </motion.div>
  );
};
export default Home;
