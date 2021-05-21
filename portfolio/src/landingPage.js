import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import WandrMock from "./wander_macbook_pro.jpeg";
import DishTrackerMock from "./dishtracker_iphonex.jpeg";
import Container from "@material-ui/core/Container";

export default function LandingPage(props) {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      position: "fixed",
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
    title2: {
      marginTop: "91px",
    },
    title3: {
      marginTop: "6px",
      paddingBottom: "50px",
    },
    DishTracker: {
      display: "flex",
      maxWidth: "100%",
      maxHeight: "100%",
      paddingRight: "15px",
    },
    Wandr: {
      display: "flex",
      maxWidth: "100%",
      maxHeight: "100%",
      paddingLeft: "15px",
      paddingBottom: "30px",
    },
  }));

  const title2 = createMuiTheme({
    typography: {
      fontFamily: "Playfair Display, Sans-serif",
      fontSize: "30px",
      h1: {
        fontWeight: 600,
        fontSize: 30,
      },
    },
  });

  const title3 = createMuiTheme({
    typography: {
      fontFamily: "Playfair Display, Sans-serif",
      letterSpacing: "8",
      h1: {
        fontWeight: 600,
        fontSize: 100,
        letterSpacing: 8,
      },
    },
  });

  const classes = useStyles();

  return (
    <ThemeProvider>
      <div>
        <Grid container className={classes.container}>
          <Grid item md={4} sm={6} xs={12}>
            <ThemeProvider theme={title2}>
              <Typography variant="h1">
                <Box className={classes.title2} letterSpacing={1} m={1}>
                  JS/Node/React
                </Box>
              </Typography>
            </ThemeProvider>
          </Grid>
        </Grid>
        .
        <Grid container className={classes.container}>
          <Grid item md={4} sm={6} xs={12}>
            <ThemeProvider theme={title3}>
              <Typography variant="h1">
                <Box className={classes.title3} letterSpacing={6}>
                  FullStack
                </Box>
              </Typography>
            </ThemeProvider>
          </Grid>
        </Grid>
        <Grid container className={classes.container}>
          <Grid item md={6} sm={6} xs={12}>
            <img className={classes.DishTracker} src={DishTrackerMock} />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <img className={classes.Wandr} src={WandrMock} />
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
