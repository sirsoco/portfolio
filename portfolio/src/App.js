import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import zIndex from '@material-ui/core/styles/zIndex';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import WandrMock from './public/wander_macbook_pro.jpeg';
import DishTrackerMock from './public/dishtracker_iphonex.jpeg';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import landingPage from './pages/landingPage';
import aboutPage from './pages/aboutPage';
import workPage from './pages/workPage';
import contactPage from './pages/contactPage';
import Footer from './components/Footer/Footer.js';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: 'fixed',
    backgroundColor: '#FFFFFF!important',
    paddingTop: '30px',
    paddingBottom: '15px',
    width: '100%',
    display: 'block',
  },
  toolbar: {
    paddingTop: '10px'
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: '1170px',
    paddingRight: '15px',
  },
  sitebranding: {
    marginRight: 'auto',
    marginLeft: 'auto',

    paddingTop: '12px',
  },
  navigation: {
    display: 'flex',
    float: 'right',
    paddingLeft: '15px',
    paddingRight: '15px',
    justifyContent: 'flex-end',
  },
  title2: {
    marginTop: '91px',
  },
  title3: {
    marginTop: '6px',
    paddingBottom: '50px',
  },
  menutype: {
    display: 'block',
    paddingLeft: '15px',
    paddingRight: '15px',
  },
  DishTracker: {
    display: 'flex',
    maxWidth: '100%',
    maxHeight: '100%',
    paddingRight: '15px',
  },
  Wandr: {
    display: 'flex',
    maxWidth: '100%',
    maxHeight: '100%',
    paddingLeft: '15px',
    paddingBottom: '30px',
  },
  Link: {
    color: 'inherit',
    textDecoration: 'none',
  },
}));

const title = createMuiTheme({
  typography: {
    fontFamily: 'Source code Pro, monospace',
    fontSize: 18,
    fontWeight: '300PX',
    letterSpacing: '1',
    h1: {
      fontWeight: 400,
      fontSize: 18,
    },
  },
});

const footer = createMuiTheme({
  typography: {
    fontFamily: "Playfair Display, Sans-serif",
    h6: {
      fontSize: 12,
      fontWeight: 300,
      letterSpacing: 1,
      lineHeight: 2,
    },
  },
});

const menu = createMuiTheme({
  typography: {
    fontFamily: 'Source Code Pro, monospace',
    fontSize: '12px',
    h2: {
      fontWeight: 300,
      fontSize: 12,
    },
  },
});


function App(props) {
  const classes = useStyles();
  return (
    <Router>
      <ThemeProvider>
        <Toolbar className={classes.toolbar}>
          <div className={classes.root}>
            <div className={classes.container}>
              <Grid container xs={12} className={classes.sitebranding}>
                <Grid item md={4} sm={6} xs={12}>
                  <ThemeProvider theme={title}>
                    <Typography variant='h1'>
                      <Box letterSpacing={2} m={1}>
                        <a className={classes.Link} href='/'>
                          SOLOMON OBURE
                        </a>
                      </Box>
                    </Typography>
                  </ThemeProvider>
                </Grid>
                <Grid
                  container
                  md={8}
                  direction='row'
                  className={classes.navigation}
                >
                  <ThemeProvider theme={menu}>
                    <Grid className={classes.menutype} item>
                      <Typography variant='h2'>
                        <Box letterSpacing={1} m={1}>
                          <a className={classes.Link} href='/about'>
                            ABOUT
                          </a>
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid className={classes.menutype} item>
                      <Typography variant='h2'>
                        <Box letterSpacing={1} m={1}>
                          <a className={classes.Link} href='/work'>
                            WORK
                          </a>
                        </Box>
                      </Typography>
                    </Grid>
                    <Grid className={classes.menutype} item>
                      <Typography variant='h2'>
                        <Box letterSpacing={1} m={1}>
                        <a className={classes.Link} href='/contact'>
                            CONTACT
                          </a>
                        </Box>
                      </Typography>
                    </Grid>
                  </ThemeProvider>
                </Grid>
              </Grid>
            </div>
          </div>
        </Toolbar>
        </ThemeProvider>
     
      <Switch>
        <Route exact path='/' component={landingPage}></Route>
        <Route exact path='/about' component={aboutPage}></Route>
        <Route exact path='/work' component={workPage}></Route>
        <Route exact path='/contact' component={contactPage}></Route>
      </Switch>
    
    </Router>
  );
}

export default App;
