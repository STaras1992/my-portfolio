import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
    height: '300px',
    background: '#000000',
    background: '-webkit-linear-gradient(to left, #434343, #000000)',
    background: 'linear-gradient(to left, #434343, #000000)',
    marginTop: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      height: '500px',
    },
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
    fontFamily: 'Kanit, sans-serif',
    marginBottom: '30px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: 0,
    },
  },
  contact: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactIconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },

  contactIconAvatar: {
    width: '80px',
    height: '80px',
    margin: '15px',
    padding: '0',
    background: 'white',
    border: '5px solid #393a73',
    boxShadow: '4px 4px 4px 4px rgb(0, 0, 0)',
    cursor: 'pointer',
    [theme.breakpoints.down('xs')]: {
      marginTop: '30px',
    },
    '&:hover': {
      background: 'black',
      '& svg': {
        color: 'white',
      },
      transition: 'all 0.7s',
    },
  },

  contactIcon: {
    fontSize: '50px',
    color: 'black',
  },

  mailContainer: {
    '&:hover::after': {
      position: 'absolute',
      marginLeft: '-30px',
      fontSize: '18px',
      content: '"stas23061992@gmail.com"',
      display: 'block',
      color: 'white',
    },
  },
  phoneContainer: {
    marginLeft: '60px',
    marginRight: '60px',

    '&:hover::after': {
      position: 'absolute',
      fontSize: '18px',
      marginLeft: '17px',
      content: '"0549105055"',
      display: 'block',
      color: 'white',
    },

    [theme.breakpoints.down('xs')]: {
      marginLeft: 0,
      marginRight: 0,
    },
  },
  linkedinContainer: {
    '&:hover::after': {
      position: 'absolute',
      fontSize: '18px',
      marginLeft: '-55px',
      content: '"www.linkedin.com/in/staras1992"',
      display: 'block',
      color: 'white',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className='footer'>
      <Container className={classes.root}>
        <Typography className={classes.title} variant='h4' align='center'>
          My contacts
        </Typography>
        <div className={classes.contactIconsContainer}>
          <div className={classes.mailContainer}>
            <Link href='mailto:stas23061992@gmail.com' target='_blank' rel='noreferrer'>
              <Avatar className={classes.contactIconAvatar}>
                <MailOutlineIcon className={classes.contactIcon} />
              </Avatar>
            </Link>
          </div>
          <div className={classes.phoneContainer}>
            <Avatar className={classes.contactIconAvatar}>
              <PhoneAndroidIcon className={classes.contactIcon} />
            </Avatar>
          </div>
          <div className={classes.linkedinContainer}>
            <Link href='https://www.linkedin.com/in/staras1992' target='_blank' rel='noreferrer'>
              <Avatar className={classes.contactIconAvatar}>
                <LinkedInIcon className={classes.contactIcon} />
              </Avatar>
            </Link>
          </div>
        </div>
        {/* <Container className={classes.footerContent} maxWidth='lg'>
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
        </Container> */}
      </Container>
    </footer>
  );
};

export default Footer;
