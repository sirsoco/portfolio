import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import JavaScript from '../public/icons8-javascript.svg';
import HTML from '../public/icons8-html-5.svg';
import ReactSVG from '../public/icons8-react.svg';
import Cert from '../public/fullstackcert.png';
import { loremIpsum } from "lorem-ipsum";

export default function AboutPage(props) {
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
    title2: {
      marginTop: "91px",
    },
    title3: {
      marginTop: "56px",
      marginBottom: "5px",
      paddingBottom: "35px",
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

  const title4 = createMuiTheme({
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

  const biotext = createMuiTheme({
    typography: {
      fontFamily: "Roboto, sans-serif",
      h1: {
        fontSize: 14,
        letterSpacing: 1,
        lineHeight: 2,
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
                  Bio
                </Box>
              </Typography>
            </ThemeProvider>
          </Grid>
        </Grid>
        <Grid container className={classes.container}>
          <Grid item md={12} sm={6} xs={12}>
            <ThemeProvider theme={biotext}>
              <Typography variant="h1">
                <Box className={classes.title3} letterSpacing={1}>
                  Solomon Obure received his BS in Engineering from the
                  University of Georgia in 2017 and went on to design awesome
                  sustainable products before taking a hiatius to study Computer
                  Science at the University of Minnesota, where he recently
                  received a fullstack certification.
                </Box>
              </Typography>
            </ThemeProvider>
          </Grid>
        </Grid>
        <Grid container className={classes.container}>
          <Grid item md={6} sm={6} xs={12} className={classes.skill}>
            <ThemeProvider theme={biotext}>
            <Box letterSpacing={1}>
              <Typography>
                  Skills
              </Typography>
            </Box>
            </ThemeProvider>
          </Grid>
          <Grid item>
          <Box letterSpacing={1}>
              <img src={JavaScript} />
              <Typography>
                JavaScript
             </Typography>
            </Box>
          </Grid>
          <Grid item>
          <Box letterSpacing={1}>
            <img src={HTML} />
              <Typography>
                HTML 5
              </Typography>
              </Box>
          </Grid>
          <Grid item>
            <Box letterSpacing={1}>
                <img src={ReactSVG} />
                <Typography>
                    React
                </Typography>
            </Box>
          </Grid>
        </Grid>
        <Grid container className={classes.container}>
          <Grid item md={6} sm={6} xs={12} className={classes.cert}>
            <ThemeProvider theme={biotext}>
              <Box letterSpacing={1}>
                <Typography>
                    Cert
                </Typography>
              </Box>
              </ThemeProvider>
          </Grid>
          <Grid item>
          <Box letterSpacing={1}>
              <img src={Cert} />
              <Typography>
                JavaScript
             </Typography>
            </Box>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
