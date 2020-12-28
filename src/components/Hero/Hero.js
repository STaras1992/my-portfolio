import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    maxWidth: '100vw',
  },
  heroButtons: {
    marginTop: theme.spacing(4),
    '& Button': {
      [theme.breakpoints.up('md')]: {
        fontSize: '1.3rem',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '1.8rem',
      },
      [theme.breakpoints.up('xl')]: {
        fontSize: '2rem',
      },
    },
  },
  nameTitle: {
    fontWeight: 700,
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
            Full stack developer.
          </Typography>
          <div className={classes.heroButtons}>
            <Grid container spacing={2} justify='center'>
              <Grid item>
                <Button variant='contained' color='primary'>
                  About me
                </Button>
              </Grid>
              <Grid item>
                <Button variant='contained' color='secondary'>
                  My works
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
