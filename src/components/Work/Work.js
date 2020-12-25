import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import getProjects from "../../utills/getProjects.js";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    // backgroundImage: 'linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)',
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Work = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState(getProjects());

  const viewProject = () => {};

  return (
    <React.Fragment>
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {projects.map((project) => (
              <Grid item key={project.title} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={project.image}
                    title={project.title}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {project.title}
                    </Typography>
                    <Typography>{project.description}</Typography>
                  </CardContent>
                  <CardActions>
                    <Link
                      href={project.adress || "#"}
                      color="primary"
                      onClick={viewProject}
                    >
                      View
                    </Link>
                    <Link href={project.source || "#"} color="primary">
                      Source
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
};

export default Work;
