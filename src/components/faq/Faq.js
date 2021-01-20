import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './faq.module.scss';
import { faqAnimation } from '../../animations/animation';

const Faq = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.faq}>
      <div
        className={styles.row}
        onClick={() => setIsOpen(currOpen => !currOpen)}
      >
        <p className={styles.question}>{question}</p>
        <FontAwesomeIcon icon={faPlus} size='2x' className={styles.icon} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.p
            key={id}
            variants={faqAnimation}
            initial='initial'
            animate='animate'
            exit='exit'
            className={styles.answer}
          >
            {answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};
Faq.defaultProps = {
  question: '',
  answer: '',
};
Faq.propTypes = {
  question: PropTypes.string,
  answer: PropTypes.string,
};
export default Faq;
