import React from 'react';
import { Field, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import styles from './input.module.scss';

const Input = ({ type, id, name, label, placeholder, haveError, ...rest }) => {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.inputContainer} ${
          haveError && styles.containerError
        }`}
      >
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <Field
          type={type}
          name={name}
          id={id}
          placeholder={placeholder}
          className={styles.input}
          {...rest}
        />
      </div>
      <ErrorMessage name={name} component='p' className={styles.error} />
    </div>
  );
};
Input.defaultProps = {
  type: 'text',
  placeholder: '',
  haveError: false,
};
Input.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  haveError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
export default Input;
