import React, { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';
import Collapse from '@material-ui/core/Collapse';
import Zoom from '@material-ui/core/Zoom';
import Container from '@material-ui/core/Container';
import DraftsIcon from '@material-ui/icons/Drafts';
import MailIcon from '@material-ui/icons/Mail';
import MuiContactForm from './MuiContactForm.js';
import { BLUE_COLOR } from '../../consts/colors.js';

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
    // animation: `$fadeIn 3000ms ${theme.transitions.easing.easeInOut}`,
  },
  titleBefore: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '1.2rem',
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
      fontSize: '3.8rem',
      [theme.breakpoints.up('xs')]: {
        fontSize: '5rem',
      },
      [theme.breakpoints.up('sm')]: {
        fontSize: '5.5rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '6.5rem',
      },
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
              {/* If you have any request or recommendation please write me */}
              Write me &nbsp;
              {showContactForm ? (
                <DraftsIcon className={classes.formIcon} onClick={handleShowContactForm} />
              ) : (
                <MailIcon className={classes.formIcon} onClick={handleShowContactForm} />
              )}
              {/* <span className={classes.writeMe} onClick={handleShowContactForm}>
                &nbsp;write me
              </span> */}
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
            <Zoom in={true} timeout={1500}>
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
            </Zoom>
          )}
        </Container>
      </div>
    </section>
  );
};

export default Contact;
