import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Formik, Form, useField, useFormikContext } from 'formik';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import * as Yup from 'yup';
import styled from '@emotion/styled';
import './ContactFormStyles.css';
// import './styles-custom.css';

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <TextField variant='outlined' className='text-input' {...field} {...props} />
      {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
    </>
  );
};

const MyTextAreaInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea className='text-area-input' {...field} {...props} />
      {meta.touched && meta.error ? <div className='error'>{meta.error}</div> : null}
    </>
  );
};

const ContactForm = () => {
  return (
    <>
      <h1>Contact me</h1>
      <Formik
        initialValues={{
          Name: '',
          Email: '',
          Subject: '',
          Message: '',
        }}
        validationSchema={Yup.object({
          Name: Yup.string().max(15, 'Must be 25 characters or less'),
          Email: Yup.string().email('Invalid email addresss').required('Required'),
          Subject: Yup.string().max('Must be 50 characters or less'),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise((r) => setTimeout(r, 500));
          setSubmitting(false);
        }}
      >
        <Form className='form'>
          <MyTextInput label='Name' name='name' type='text' placeholder='Enter your name' />
          <MyTextInput label='Subject' name='subject' type='text' placeholder='Enter subject' />
          <MyTextInput label='Email' name='email' type='email' placeholder='mail@gmail.com' />
          <MyTextAreaInput label='Message' name='message' type='text-area' placeholder='Your message' />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
