import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import ProfileImage from "../../images/profile-image2.jpg";
import Hidden from "@material-ui/core/Hidden";
import "./About.scss";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
  avatarContainer: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  avatar: {
    width: "200px",
    height: "210px",
  },
}));

const About = () => {
  const classes = useStyles();

  return (
    <div className="about">
      {/* <Container maxWidth="sm"> */}
      {/* <Paper elevation={3}> */}
      <Container maxWidth="md">
        <Grid container className={classes.root} spacing={2}>
          <Grid item md={12}>
            <Typography variant="h5" align="left" color="primary">
              About me
            </Typography>
          </Grid>
          <Grid item sm={12} md={9}>
            <Typography
              variant="body1"
              align="left"
              color="primary"
              component="p"
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure there isn't anything embarrassing
              hidden in the middle of text. All the Lorem Ipsum generators on
              the Internet tend to repeat predefined chunks as necessary, making
              this the first true generator on the Internet. It uses a
              dictionary of over 200 Latin words, combined with a handful of
              model sentence structures, to generate Lorem Ipsum which looks
              reasonable. The generated Lorem Ipsum is therefore always free
              from repetition, injected humour, or non-characteristic words etc.
            </Typography>
          </Grid>
          <Hidden smDown>
            <Grid className={classes.avatarContainer} item md={3}>
              <Avatar
                className={classes.avatar}
                alt="Profile"
                src={ProfileImage}
              />
              {/* <div className="image-container">
              <img
                className="profile-image"
                src="../../images/profile-image.png"
                alt="profile"
              />
            </div> */}
            </Grid>
          </Hidden>
        </Grid>
      </Container>
      {/* </Paper> */}
      {/* </Container> */}
    </div>
  );
};

export default About;
