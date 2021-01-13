import React, { useState } from 'react';
import Landing from '../../components/landing/Landing';
import Features from '../../components/features/Features';

const Home = () => {
  const [features, setFeatures] = useState([]);
  return (
    <>
      <Landing />
      <Features features={features} setFeatures={setFeatures} />
    </>
  );
};
export default Home;
