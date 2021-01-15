import React, { useState } from 'react';
import Landing from '../../components/landing/Landing';
import Features from '../../components/features/Features';
import Faqs from '../../components/faqs/Faqs';

const Home = () => {
  const [features, setFeatures] = useState([]);
  const [faqs, setFaqs] = useState([]);
  return (
    <>
      <Landing />
      <Features features={features} setFeatures={setFeatures} />
      <Faqs faqs={faqs} setFaqs={setFaqs} />
    </>
  );
};
export default Home;
