import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { motion } from 'framer-motion';
import styles from './contact.module.scss';
import FormElm from '../../components/formElm/FormElm';
import { pageAnimation, submitBtnAnimation } from '../../animations/animation';

const initialValues = {
  email: '',
  mobile: '',
  desc: '',
};
const validationSchema = Yup.object({
  email: Yup.string().required('email is required').email('enter valid email'),
  mobile: Yup.string()
    .required('mobile is required')
    .matches(/^09\d{9}$/, 'enter valid mobile'),
  desc: Yup.string().max(100, 'description should be less than 100 characters'),
});
const onSubmit = async (values, submitProps) => {
  // only enter to onSubmit if we dont have any error
  setTimeout(() => {
    submitProps.setSubmitting(false);
    submitProps.resetForm();
  }, 1000);
};
const Contact = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <div className={styles.container}>
        <h6 className={styles.title}> contact form </h6>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnMount={false}
          validateOnChange
          validateOnBlur
        >
          {formik => {
            return (
              <Form noValidate className={styles.form}>
                <FormElm
                  tag='input'
                  type='email'
                  id='email'
                  name='email'
                  placeholder='enter your email'
                  label='enter email :'
                  haveError={formik.touched.email && formik.errors.email}
                />
                <FormElm
                  tag='input'
                  type='tel'
                  id='mobile'
                  name='mobile'
                  placeholder='enter your mobile'
                  label='enter mobile :'
                  haveError={formik.touched.mobile && formik.errors.mobile}
                />
                <FormElm
                  tag='textarea'
                  id='desc'
                  name='desc'
                  placeholder='enter description'
                  label='enter description :'
                  haveError={formik.touched.desc && formik.errors.desc}
                />
                <motion.button
                  type='submit'
                  className={styles.submit}
                  disabled={
                    formik.isSubmitting || (formik.dirty && !formik.isValid)
                  }
                  variants={submitBtnAnimation}
                  initial='initial'
                  animate='animate'
                  whileHover='whileHover'
                  whileTap='whileTap'
                >
                  submit form
                </motion.button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </motion.div>
  );
};
export default Contact;
