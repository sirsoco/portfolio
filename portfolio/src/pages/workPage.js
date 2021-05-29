import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import wanderMap from '../public/wander_map.png';

export default function WorkPage() {
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
      paddingBottom: "px",
    },
    images:{
      border: '3px solid #555',
      width: "90%",
      height: "90%",   
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
    },
  });

  const title4 = createMuiTheme({
    typography: {
      fontFamily: "Playfair Display, Sans-serif",
      letterSpacing: "8",
      h1: {
        fontWeight: 600,
        fontSize: 30,
        letterSpacing: 8,
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
            </ThemeProvider>
          </Grid>
        </Grid>
        <Grid container className={classes.container}>
          <Grid className={classes.work} item md={6}>
          <ThemeProvider theme={title4}>
              <Typography align="right" variant="h1">
                <Box className={classes.title3} letterSpacing={6}>
                  Wandr
                </Box>
              </Typography>
            </ThemeProvider>
          </Grid>
          <Grid item className={classes.work} item md={6} direction="row">
          
            <Grid item direction="column">
           
            <img className={classes.images} src={wanderMap} />
          </Grid>
            </Grid>
           
        </Grid>
      </div>
    </ThemeProvider>
  );
}
