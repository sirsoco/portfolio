import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import zIndex from "@material-ui/core/styles/zIndex";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import WandrMock from "./wander_macbook_pro.jpeg";
import DishTrackerMock from "./dishtracker_iphonex.jpeg";
import landingPage from './landingPage';
import aboutPage from './aboutPage.js';



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
  sitebranding: {
    marginRight: "auto",
    marginLeft: "auto",
    paddingLeft: "15px",
    paddingRight: "15px",
    paddingTop: "12px",
  },
  navigation: {
    display: "flex",
    float: "right",
    paddingLeft: "15px",
    paddingRight: "15px",
    justifyContent: "flex-end",
  },
  title2: {
    marginTop: "91px",
  },
  title3: {
    marginTop: "6px",
    paddingBottom: "50px",
  },
  menutype: {
    display: "block",
    paddingLeft: "15px",
    paddingRight: "15px",
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

const title = createMuiTheme({
  typography: {
    fontFamily: "Source code Pro, monospace",
    fontSize: "16",
    fontWeight: "300PX",
    letterSpacing: "1",
    h1: {
      fontWeight: 400,
      fontSize: 18,
    },
  },
});

const menu = createMuiTheme({
  typography: {
    fontFamily: "Source Code Pro, monospace",
    fontSize: "12px",
    h2: {
      fontWeight: 300,
      fontSize: 12,
    },
  },
});



function App() {
  const classes = useStyles();
  return (
    <Router>
    <ThemeProvider>
      <div className={classes.root}>
        <div className={classes.container}>
          <Grid xs={12} className={classes.sitebranding} container>
            <Grid item md={4} sm={6} xs={12}>
              <ThemeProvider theme={title}>
                <Typography variant="h1">
                  <Box letterSpacing={2} m={1}>
                    SOLOMON OBURE
                  </Box>
                </Typography>
              </ThemeProvider>
            </Grid>
            <Grid
              container
              md={8}
              direction="row"
              className={classes.navigation}
            >
              <ThemeProvider theme={menu}>
                <Grid className={classes.menutype} item>
                  <Typography variant="h2">
                    <Box letterSpacing={1} m={1}>
                      ABOUT
                    </Box>
                  </Typography>
                </Grid>
                <Grid className={classes.menutype} item>
                  <Typography variant="h2">
                    <Box letterSpacing={1} m={1}>
                      WORK
                    </Box>
                  </Typography>
                </Grid>
                <Grid className={classes.menutype} item>
                  <Typography variant="h2">
                    <Box letterSpacing={1} m={1}>
                      CONTACT
                    </Box>
                  </Typography>
                </Grid>
              </ThemeProvider>
            </Grid>
          </Grid>
        </div>

       
      </div>
    </ThemeProvider>

      <Switch>
          <Route exact path="/" component={landingPage}>
          </Route>
          <Route exact path='About' component={aboutPage}>
          </Route>
      </Switch>

    </Router>
  );
}

export default App;
