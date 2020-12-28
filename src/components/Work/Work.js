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

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    // backgroundImage: 'linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    marginBottom: '100px',
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    borderBottom: '2px solid #ccc',
  },
  cardContent: {
    flexGrow: 1,
  },
  cardActions: {
    paddingLeft: '16px',
  },
  cardTitle: {
    color: '#394bad',
    fontWeight: 'bold',
  },
  cardDescription: {},
  cardTools: {
    fontWeight: 'bold',
  },
  actionButton: {
    '&:hover': {
      textDecoration: 'none',
      cursor: 'pointer',
    },
  },
}));

const Work = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState(getProjects());

  const cards = projects.map((project) => (
    <Grid item key={project.title} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia className={classes.cardMedia} image={project.image} />
        <CardContent className={classes.cardContent}>
          <Typography className={classes.cardTitle} gutterBottom variant='h6'>
            {project.title}
          </Typography>
          <Typography className={classes.cardDescription} gutterBottom variant='body2'>
            {project.description}
          </Typography>
          <Typography className={classes.cardTools} variant='body1'>{`Tools:${project.tools}`}</Typography>
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
        <Grid container spacing={4}>
          {cards}
        </Grid>
      </Container>
    </section>
  );
};

export default Work;
