import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(6),
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className='footer'>
      <footer className={classes.footer}>
        <Container className={classes.cardGrid} maxWidth='md'>
          <Typography variant='h6' align='center' gutterBottom>
            Contact me
          </Typography>
          <Container></Container>
          <Typography variant='subtitle1' align='justify' component='spa'>
            <Link href='#' color='textPrimary' onClick={(event) => event.preventDefault()} rel='noreferrer'>
              stas23061992@gmail.com
            </Link>
          </Typography>
          <Typography variant='subtitle1' align='center' color='textPrimary' component='p'>
            0549105055
          </Typography>
          <Typography variant='subtitle1' align='right' component='a'>
            <Link
              href='www.linkedin.com/in/staras1992'
              color='textPrimary'
              onClick={(event) => event.preventDefault()}
              rel='noreferrer'
            >
              linkedin/staras1992
            </Link>
          </Typography>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
