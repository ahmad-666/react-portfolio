import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { AnimateSharedLayout } from 'framer-motion';
import Faq from '../faq/Faq';
import styles from './faqs.module.scss';

const Faqs = ({ faqs, setFaqs }) => {
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const faqsRes = await axios.get('/data/faqs.json');
        setFaqs(faqsRes.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchFaqs();
  }, []);
  return (
    <div className={styles.faqsContainer}>
      <h5 className={styles.title}> faqs </h5>
      <div className={styles.faqs}>
        {faqs.map(faq => (
          <Faq
            key={faq._id}
            question={faq.question}
            answer={faq.answer}
            id={faq._id}
          />
        ))}
      </div>
    </div>
  );
};
Faqs.defaultProps = {
  faqs: [],
};
Faqs.propTypes = {
  faqs: PropTypes.array,
  setFaqs: PropTypes.func.isRequired,
};
export default Faqs;
