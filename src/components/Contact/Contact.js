import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import Container from '@material-ui/core/Container';
import DraftsIcon from '@material-ui/icons/Drafts';
import MailIcon from '@material-ui/icons/Mail';
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
    marginLeft: '50px',
    marginRight: '50px',

    [theme.breakpoints.up('lg')]: {
      marginLeft: '200px',
      marginRight: '200px',
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
  titleBefore: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.3rem',
    fontWeight: 600,
    marginBottom: '20px',
    [theme.breakpoints.up('xs')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '3rem',
    },
  },
  formIcon: {
    fontSize: '3.5rem',
    cursor: 'pointer',
    transition: 'all 0.6s',

    [theme.breakpoints.up('xs')]: {
      fontSize: '4.5rem',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '5rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '6rem',
    },
    '&:hover': {
      transform: 'scale(1.2)',
    },
  },
  titleAfter: {
    marginTop: '30px',
    fontSize: '30px',
  },

  '@-webkit-keyframes fadeIn': {
    from: { height: 0 },
    to: { height: 100 },
  },
  '@keyframes fadeIn': {
    from: { height: 0 },
    to: { height: 100 },
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
    <section id='contact' className='contact-form'>
      <div className={classes.root}>
        <Container className={classes.container} maxWidth='lg'>
          <div className={classes.contactTitle}>
            <Typography className={classes.titleBefore} textAlign='center' variant='subtitle2'>
              Write me &nbsp;
              {showContactForm ? (
                <DraftsIcon className={classes.formIcon} onClick={handleShowContactForm} />
              ) : (
                <MailIcon className={classes.formIcon} onClick={handleShowContactForm} />
              )}
            </Typography>
          </div>
          {showContactForm && (
            <Zoom in={true} timeout={1500}>
              <div className={classes.form}>
                <div className={classes.formContent}>
                  <MuiContactForm handleMessageSent={handleMessageSent} />
                </div>
                {isMessageSent && (
                  <Typography className={classes.titleAfter} variant='subtitle1'>
                    Thank you for your time,i appreciate that.
                  </Typography>
                )}
              </div>
            </Zoom>
          )}
        </Container>
      </div>
    </section>
  );
};

export default Contact;
