import React from 'react';
import PropTypes from 'prop-types';
import Input from '../input/Input';
import Textarea from '../textarea/Textarea';

const FormElm = ({ tag, ...rest }) => {
  switch (tag) {
    case 'input':
      return <Input {...rest} />;
    case 'textarea':
      return <Textarea {...rest} />;
    // case 'select': return ;
    // case 'radio': return ;
    // case 'checkbox': return ;
    // case 'datepicker': return ;
    default:
      console.error('tag prop inside FormElm is wrong , tag=', tag);
      return null;
  }
};
FormElm.propTypes = {
  tag: PropTypes.string.isRequired,
};
export default FormElm;
