import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link as ScrollLink } from 'react-scroll';
import Container from '@material-ui/core/Container';
import { TITLE_COLOR, SUB_TITLE_COLOR } from '../../consts/colors.js';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    maxWidth: '100vw',
  },
  heroButtonsContainer: {
    marginTop: theme.spacing(4),
    '& Button': {
      background: 'rgb(0,0,0)',
      color: 'white',
      border: '3px solid #393a73',
      boxShadow: '0 10px 6px -6px white',
      textTransform: 'none',
      fontSize: '1.3rem',
      [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '1.8rem',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '2.2rem',
      },
      '&:hover': {
        background: 'white',
        color: 'black',
        boxShadow: '0 10px 6px -6px black',
      },
    },
  },
  nameTitle: {
    fontWeight: 800,
    color: TITLE_COLOR,
    [theme.breakpoints.up('sm')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '4rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '4.5rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '5rem',
    },
  },
  descriptionTitle: {
    color: SUB_TITLE_COLOR,
    [theme.breakpoints.up('sm')]: {
      fontSize: '2rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '2.5rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: '3.5rem',
    },
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <div className='hero'>
      <div id='main' className={classes.heroContent}>
        <Container className={classes.heroContent}>
          <Typography className={classes.nameTitle} variant='h4' align='center' color='textPrimary' gutterBottom>
            I am Stas Tarasenko
          </Typography>
          <Typography className={classes.descriptionTitle} variant='h5' align='center' color='textSecondary' paragraph>
            Full stack developer
          </Typography>
          <div className={classes.heroButtonsContainer}>
            <Grid container spacing={2} justify='center'>
              <Grid item>
                <Button className={classes.button} variant='contained'>
                  <ScrollLink className={classes.actionButton} to='about' offset={-100} smooth duration={800}>
                    About me
                  </ScrollLink>
                </Button>
              </Grid>
              <Grid item>
                <Button className={classes.button} variant='contained'>
                  <ScrollLink className={classes.actionButton} to='work' offset={-100} smooth duration={800}>
                    My works
                  </ScrollLink>
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
