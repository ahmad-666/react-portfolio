import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './faq.module.scss';

const Faq = ({ question, answer }) => {
  return (
    <div className={styles.faq}>
      <div className={styles.row}>
        <p className={styles.question}>{question}</p>
        <FontAwesomeIcon icon={faPlus} size='2x' className={styles.icon} />
      </div>
      <p className={styles.answer}>{answer}</p>
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
