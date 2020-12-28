import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

const initialValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const useStyle = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '50%',
      margin: theme.spacing(1),
    },
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textArea: {
    width: '45%',
  },
  messageError: {
    display: 'none',
  },
  messageErrorShow: {
    width: '45%',
    color: '#f44336',
    display: 'flex',
    justifyContent: 'flex-start',
    marginLeft: '14px',
    fontSize: '0.75rem',
    marginTop: '3px',
    textAlign: 'left',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    fontWeight: '400',
    lineHeight: '1.66',
    letterSpacing: '0.03333em',
  },
}));

const MuiContactForm = () => {
  const classes = useStyle();
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({ email: '', message: '', name: '', subject: '' });
  const [visited, setVisited] = useState({ email: false, message: false, name: false, subject: false });

  const validate = (field = null) => {
    let temp = {};
    if (!field || field === 'email') {
      temp.email = /$^|.+@.+..+/.test(values.email) ? '' : 'Email is not valid';
      temp.email = values.email !== '' ? temp.email : 'Email field is required';
    } else temp.email = '';
    if (!field || field === 'message') {
      temp.message = values.message ? '' : 'Message field is required';
    } else temp.message = '';
    if (!field || field === 'name') {
      temp.name = values.name.length < 25 ? '' : 'Maximum field length is 25 characters';
    } else temp.name = '';
    if (!field || field === 'subject') {
      temp.subject = values.subject.length < 50 ? '' : 'Maximum field length is 50 characters';
    } else temp.subject = '';

    setErrors({ ...temp });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    if (!visited[name]) setVisited({ ...visited, [name]: true });
    setValues({ ...values, [name]: value });
    console.log(visited);
    console.log(errors);
  };

  useEffect(() => {
    if (visited.email) validate('email');
  }, [values.email]);

  useEffect(() => {
    if (visited.name) validate('name');
  }, [values.name]);

  useEffect(() => {
    if (visited.subject) validate('subject');
  }, [values.subject]);

  useEffect(() => {
    if (visited.message) validate('message');
  }, [values.message]);

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.root}>
        <Container className={classes.formContainer} maxWidth='lg'>
          <TextField
            variant='outlined'
            label='Email'
            name='email'
            value={values.email}
            error={errors.email !== '' ? true : false}
            helperText={errors.email}
            onChange={handleInputChange}
          />
          <TextField
            variant='outlined'
            label='Name'
            name='name'
            value={values.name}
            error={errors.name !== '' ? true : false}
            helperText={errors.name}
            onChange={handleInputChange}
          />
          <TextField
            variant='outlined'
            label='Subject'
            name='subject'
            value={values.subject}
            error={errors.subject !== '' ? true : false}
            helperText={errors.subject}
            onChange={handleInputChange}
          />
          <TextareaAutosize
            className={classes.textArea}
            label='Message'
            name='message'
            rowsMin={5}
            value={values.message}
            // error={errors.message !== '' ? true : false}
            // helperText={errors.message}
            onChange={handleInputChange}
          />
          <div className={errors.message !== '' ? classes.messageErrorShow : classes.messageError}>
            Message is required
          </div>
          <div>
            <Button variant='contained' color='primary' type='submit' size='medium'>
              Submit
            </Button>
          </div>
        </Container>
      </form>
    </div>
  );
};

export default MuiContactForm;
