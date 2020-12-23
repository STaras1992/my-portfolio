import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <div className='hero'>
      <div className={classes.heroContent}>
        <Container maxWidth='md'>
          <Typography component='h2' variant='h2' align='center' color='textPrimary' gutterBottom>
            I am Stas Tarasenko
          </Typography>
          <Typography variant='h5' align='center' color='textSecondary' paragraph>
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
                <Button variant='outlined' color='primary'>
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
