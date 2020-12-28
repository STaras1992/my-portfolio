import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import MuiContactForm from './MuiContactForm.js';

const useStyle = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '100px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: '35px',
  },
  contactTitle: {
    '& .MuiTypography-root': {
      fontSize: '25px',
    },
  },
  writeMe: {
    cursor: 'pointer',
    color: 'red',
  },
  formContent: {
    width: '100%',
  },
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleAfter: {
    marginTop: '30px',
    fontSize: '30px',
  },
}));

const Contact = () => {
  const classes = useStyle();
  const [showContactForm, setShowContactForm] = useState(false);
  const [isMessageSent, setMessageSent] = useState(false);

  const handleShowContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  const handleMessageSent = () => {
    setMessageSent(true);
  };

  return (
    <section className='contact-form'>
      <div className={classes.root}>
        <Container className={classes.container} maxWidth='md'>
          <div className={classes.contactTitle}>
            <Typography className={classes.titleBefore} variant='subtitle2'>
              If you have any request,recommendation or just something to say please
              <span className={classes.writeMe} onClick={handleShowContactForm}>
                &nbsp;write me
              </span>
            </Typography>
            {/* &nbsp;
            <Typography
              className={classes.writeMe}
              variant='subtitle2'
              color='secondary'
              onClick={handleShowContactForm}
            >
              write me
            </Typography> */}
          </div>
          {showContactForm && (
            <div className={classes.form}>
              <div className={classes.formContent}>
                <MuiContactForm handleMessageSent={handleMessageSent} />
              </div>
              {isMessageSent && (
                <Typography className={classes.titleAfter} variant='subtitle1'>
                  Thanks you for your time,i appreciate that.
                </Typography>
              )}
            </div>
          )}
        </Container>
      </div>
    </section>
  );
};

export default Contact;
