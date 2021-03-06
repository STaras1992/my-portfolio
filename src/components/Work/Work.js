import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import getProjects from '../../utills/getProjects.js';
import { SUB_TITLE_COLOR, TITLE_COLOR, TEXT_COLOR } from '../../consts/colors.js';

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    // backgroundImage: 'linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    marginBottom: '100px',
  },

  title: {
    color: SUB_TITLE_COLOR,
    marginBottom: '30px',
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

  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'all 0.4s ease-in-out',
    '&:hover': {
      zIndex: 100,
      transform: 'scale(1.13)',
      [theme.breakpoints.down('xs')]: {
        transform: 'scale(1.04)',
      },
    },
  },

  cardMedia: {
    paddingTop: '56.25%', // 16:9
    borderBottom: '2px solid #ccc',
    borderTop: '2px solid #ccc',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },

  cardContent: {
    flexGrow: 1,
  },

  cardActions: {
    paddingLeft: '8px',
  },

  cardTitle: {
    color: TITLE_COLOR,
    fontSize: '26px',
    fontWeight: 800,
  },

  cardDescription: {
    color: TEXT_COLOR,
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 500,
    fontSize: '17px',
  },
  tools: {
    marginTop: '20px',
    marginBottom: '8px',
  },
  toolsTitle: {
    color: TITLE_COLOR,
    // fontFamily: 'Noto Sans, sans-serif',
    fontSize: '20px',
    fontWeight: 800,
  },
  toolsList: {
    color: TEXT_COLOR,
    // fontFamily: 'Noto Sans, sans-serif',
    fontSize: '18px',
    fontWeight: 600,
  },

  actionButton: {
    fontWeight: 'bold',
    '&:hover': {
      textDecoration: 'none',
      cursor: 'pointer',
    },
  },
}));

const Work = () => {
  const classes = useStyles();
  const [projects] = useState(getProjects());

  const cards = projects.map((project) => (
    <Grid item key={project.title} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia} image={project.image} />
        <CardContent className={classes.cardContent}>
          <Typography className={classes.cardTitle} gutterBottom variant='h6'>
            {project.title}
          </Typography>
          <Typography className={classes.cardDescription} gutterBottom>
            {project.description}
          </Typography>
          <div className={classes.tools}>
            <Typography className={classes.toolsTitle} variant='h6'>
              Tools:
            </Typography>
            <Typography className={classes.toolsList} variant='body1'>
              {project.tools}
            </Typography>
          </div>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button>
            <Link
              className={classes.actionButton}
              variant='inherit'
              href={project.source}
              color='primary'
              target='_blank'
              rel='noopener noreferrer'
            >
              Source
            </Link>
          </Button>
          {project.adress !== '#' ? (
            <Button>
              <Link
                className={classes.actionButton}
                variant='inherit'
                href={project.adress}
                color='primary'
                target='_blank'
                rel='noopener noreferrer'
              >
                View
              </Link>
            </Button>
          ) : (
            <></>
          )}
        </CardActions>
      </Card>
    </Grid>
  ));

  return (
    <section id='work'>
      <Container className={classes.cardGrid} maxWidth='lg'>
        <Typography className={classes.title} variant='h4' align='left'>
          My works
        </Typography>
        <Grid container spacing={4}>
          {cards}
        </Grid>
      </Container>
    </section>
  );
};

export default Work;
