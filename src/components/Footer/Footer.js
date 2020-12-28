import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    maxWidth: '100%',
    height: '300px',
    background: '#000000',
    background: '-webkit-linear-gradient(to left, #434343, #000000)',
    background: 'linear-gradient(to left, #434343, #000000)',
    padding: theme.spacing(6),
    marginTop: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  footerContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    padding: 0,
    '& a': {
      color: 'white',
      textDecoration: 'none',
    },
  },

  title: {
    color: 'white',
  },
  contact: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer id='contact' className='footer'>
      <Container className={classes.footer}>
        <Typography className={classes.title} variant='h5' align='center' gutterBottom>
          Contact me
        </Typography>
        <Container className={classes.footerContent} maxWidth='lg'>
          <Typography className={classes.contact} variant='subtitle1'>
            <MailOutlineIcon />
            <Link href='mailto:stas23061992@gmail.com' rel='noreferrer'>
              stas23061992@gmail.com
            </Link>
          </Typography>
          <Typography className={classes.contact} variant='subtitle1'>
            <LinkedInIcon />
            <Link
              href='www.linkedin.com/in/staras1992'
              //onClick={(event) => event.preventDefault()}
              target='_blank'
              rel='noreferrer'
            >
              linkedin/staras1992
            </Link>
          </Typography>
          <Typography className={classes.contact} variant='subtitle1'>
            <PhoneAndroidIcon />
            <Link href='#' onClick={(event) => event.preventDefault()} rel='noreferrer'>
              0549105055
            </Link>
          </Typography>
        </Container>
      </Container>
    </footer>
  );
};

export default Footer;
