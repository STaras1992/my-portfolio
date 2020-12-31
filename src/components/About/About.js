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
    height: '100%',
    marginBottom: '100px',
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
    fontFamily: 'Kanit, sans-serif',
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
    fontSize: '1.2rem',
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
            <Typography className={classes.aboutTitle} variant='h4' align='left'>
              About me
            </Typography>
          </Grid>
          <Grid item sm={12} md={9}>
            <Typography className={classes.aboutText} variant='body1' align='left'>
              I am a 28 year old software developer from Rehovot, originally from Ukraine. My passion is technology and
              science. As a result of that I have previous studies in electronics and computer science and military
              service in technology unit. One of my standout characteristics is honesty, even though sometimes it's
              plays against me I am still like that. I was always interested in how things work and I was always looking
              for answers even though they were not always completely understood.
              <br />
              Very good self-learning ability and fast adaptation describes me well. For example as a new immigrant it
              took me only one year for adapt to new environment at school, already in the second year I was excellent
              in most subjects. In addition throughout my degree studies I combined work and studies, that did not
              prevent me from receiving high grades. I have a very high level of discipline and devotion to work .I
              always was among the leaders and tried to excel in everything I do. As an example at my previous studies I
              graduated with honors, as well as in my military service. My interpersonal skills are excellent because I
              have an extraordinary sense of humor and extraordinary personality that helps me connect with people and
              work in a team without any problem. Beside my passion to high-tech world, I am very interested in medicine
              and psychology. Some of my hobbies are billiard and poker. Also I'm a big football fan from a young age.
              I'm always happy to talk with new person and learn things I didn't know before. So just contact me and you
              will not regret it ...
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
