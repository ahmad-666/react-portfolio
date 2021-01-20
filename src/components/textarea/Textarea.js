import React from 'react';
import { Field, ErrorMessage } from 'formik';

import PropTypes from 'prop-types';
import styles from './textarea.module.scss';

const Textarea = ({ id, name, label, placeholder, haveError, ...rest }) => {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <Field
        as='textarea'
        name={name}
        id={id}
        placeholder={placeholder}
        className={styles.textarea}
        {...rest}
      />
      <ErrorMessage name={name} component='p' className={styles.error} />
    </div>
  );
};
Textarea.defaultProps = {
  placeholder: '',
  haveError: false,
};
Textarea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  haveError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};
export default Textarea;
