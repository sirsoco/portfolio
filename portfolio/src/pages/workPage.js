import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import wanderImg0 from "../public/wander_map.png";
import wanderImg1 from "../public/wander_profile.png";
import dishTrackerImg0 from "../public/DishTrackerLanding.png";
import dishTrackerImg1 from "../public/dishtracker.gif";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Footer from "../components/Footer/Footer.js";

export default function WorkPage(props) {
  const app = [
    {
      images: [wanderImg0, wanderImg1],
      name: "Wandr",
      type: "Web Application",
      description:
        "A geosocial web application that allows users to create profiles and connect with others looking to travel to a particular destination. By clicking profile pinned to a city on the global map a user profile appears and background information such as name, of to a specific city a profiles rendered to a global map",
      technology: "NodeJS, JavaScript, React, and MySQL",
      developers: [
        "Solomon Obure,",
        " Trier Buhrsmith,",
        " Salma Mohamed,",
        " and Andrew WestGard",
      ],
      link: "https://wwanderr.herokuapp.com/",
      github: "https://github.com/sirsoco/wander",
    },
    {
      images: [dishTrackerImg0, dishTrackerImg1],
      name: "Dish Tracker",
      type: "Web Application",
      description: "DishTracker is a web application designed to assist users in keeping track of dishes they've had at different restaurants so they don't keep ordering the same item. The app uses browser location data to pull up nearby restaurants menus through a REST API",
      technology: "HTML5, BootStrap,JavaScript, REST API",
      developers: [
        "Solomon Obure,",
        " Avani Dhalgara,",
        " Patrick Brown,",
        " and Coby Sher",
      ],
      link: "https://avanidhalgara.github.io/caps/",
      github: "https://github.com/sirsoco/wander",
    },
  ];

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: "auto",
      backgroundColor: "#FFFFFF!important",
      paddingTop: "15px",
      paddingBottom: "15px",
      width: "100%",
      zIndex: "999",
      display: "block",
    },
    container: {
      display: "flex",
      alignItems: "center",
      marginRight: "auto",
      marginLeft: "auto",
      maxWidth: "1170px",
      paddingLeft: "15px",
      paddingRight: "15px",
    },
    title3: {
      marginTop: "45px",
      marginBottom: "5px",
      paddingBottom: "50px",
    },
    images: {
      border: "3px solid #555",
      width: "90%",
      height: "90%",
    },
    photos: {
      maxWidth: "85%",
      maxHeight: "85%",
      display: "inline-block",
      paddingBottom: "30px",
      paddingTop: "30px"
    },
    appText: {
      display: "inline-flex",
    },
    appText1: {
      paddingTop: "20px",
      paddingBottom: "20px",
    },
    buttons: {
      padding: "auto",
    },
    button: {
      padding: "3px 12px 5px",
      textDecoration: "none",
      display: "inline-flex",
      borderStyle: "solid",
      borderWidth: "1px",
      borderRadius: "99em",
      borderColor: "#0000",
      backgroundColor: "#282c34",
      fill: "rgba(255, 255, 255, 1)",
      color: "rgba(255, 255, 255, 1)",
      fontSize: "14px",
      boxSizing: "borderBox",
      lineHeight: "20px",
      fontFamily: "Playfair Display, sans-serif",
      letterSpacing: ".06em",
      fontWeight: 400,
      paddingRight: "10px",
    },
    buttonGrid: {
      display: "inline-flex"
    },
    buttonGrid1: {
      paddingTop: "27px",
      paddingLeft: "24px",
      paddingRight: "60px",
    },
    appName: {
      paddingRight: "65px"
    },
    appNameGrid: {
      paddingBottom: "45px"
    },
    appDescription: {
      margin: "0px 50px 0px 50px"
    },
    Diver: {
      paddingBottom: "10px",
    },
    worksContainer: {
      marginLeft: "50px"
    }
  }));

  const title3 = createMuiTheme({
    typography: {
      fontFamily: "Playfair Display, Sans-serif",
      letterSpacing: "8",
      h1: {
        fontWeight: 600,
        fontSize: 100,
        letterSpacing: 8,
      },
      h2: {
        fontWeight: 600,
        fontSize: 60,
        letterSpacing: 0,
      },
      h3: {
        fontWeight: 400,
        fontSize: 15,
        letterSpacing: 1.5,
        lineHeight: "200%",
      },
      h4: {
        fontWeight: 600,
        fontSize: 12,
        letterSpacing: 1.75,
        lineHeight: "200%",
      },
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider>
      <div className={classes.root}>
        <Grid container className={classes.container}>
          <Grid item md={12} sm={6} xs={12}>
            <ThemeProvider theme={title3}>
              <Typography variant="h1">
                <Box className={classes.title3} letterSpacing={6}>
                  Work
                </Box>
              </Typography>
              {app.map((application, i) => (
                <div>
                <Grid container className={classes.worksContainer}>
                  <Grid item direction="column">
                    <Grid container className={classes.appNameGrid}>
                      <Grid item className={classes.appName}>
                        <Typography variant="h2">{application.name}</Typography>
                      </Grid>
                      <Grid item className={classes.buttonGrid}>
                        <Grid item className={classes.buttonGrid1} item>
                          <a
                            className={classes.button}
                            href="https://wwanderr.herokuapp.com/"
                            target="_blank"
                          >
                            Open {application.name}
                          </a>
                        </Grid>
                        <Grid className={classes.buttonGrid1} item>
                        <a
                          className={classes.button}
                          href="https://github.com/sirsoco/wander"
                          target="_blank"
                        >
                          Github
                        </a>
                      </Grid>
                      </Grid>          
                    </Grid>
                    <Box textAlign="left">
                      <Typography
                        className={classes.appDescription}
                        id={`${application.name}`}
                        variant="h3"
                      >
                        {application.description}
                        <Typography className={classes.appText1}>
                          Powered by
                          <a style={{ fontStyle: "italic" }}>
                            {application.technology}
                          </a>
                          <Typography>
                            Developed by {application.developers}
                          </Typography>
                        </Typography>
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid container className={classes.appText}>
                    <Grid item direction="column">
                      <Grid item className={classes.photos}>
                        {application.images.map((images, i) => (
                          <Grid item>
                            <Box textAlign="end">
                              <img className={classes.photos} src={images} />
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </Grid>
                  <Divider
                    className={classes.Divider}
                    variant="middle"
                  ></Divider>
                  </Grid>
                </div>
              ))}
            </ThemeProvider>
          </Grid>
        </Grid>
        <Footer></Footer>
      </div>
    </ThemeProvider>
  );
}
