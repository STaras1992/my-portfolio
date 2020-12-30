import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import ProfileImage from '../../images/profile-image2.jpg';
import Hidden from '@material-ui/core/Hidden';
import { SUB_TITLE_COLOR, TEXT_COLOR } from '../../consts/colors.js';
import './About.scss';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',
    [theme.breakpoints.up('md')]: {
      height: '100%',
      marginBottom: '200px',
    },
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: '220px',
    height: '230px',
    [theme.breakpoints.up('lg')]: {
      width: '250px',
      height: '270px',
    },
  },
  aboutTitle: {
    color: SUB_TITLE_COLOR,
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.6rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '3rem',
    },
  },
  aboutText: {
    color: TEXT_COLOR,
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.1rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.3rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '1.5rem',
    },
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <section id='about' className='about'>
      <Container className={classes.root} maxWidth='lg'>
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography className={classes.aboutTitle} variant='h5' align='left'>
              About me
            </Typography>
          </Grid>
          <Grid item sm={12} md={9}>
            <Typography className={classes.aboutText} variant='body1' align='left' color='default' component='p'>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
              in some form, by injected humour, or randomised words which don't look even slightly believable. If you
              are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
              the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
              necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin
              words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or
              non-characteristic words etc.
            </Typography>
          </Grid>
          <Hidden smDown>
            <Grid item className={classes.avatarContainer} md={3}>
              <Avatar className={classes.avatar} alt='Profile' src={ProfileImage} />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </section>
  );
};

export default About;
