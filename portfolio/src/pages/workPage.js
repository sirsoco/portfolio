import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import wanderImg0 from '../public/wander_map.png';
import wanderImg1 from '../public/wander_profile.png';
import dishTrackerImg0 from '../public/DishTrackerLanding.png';
import dishTrackerImg1 from '../public/dishtracker.gif';
import Divider from '@material-ui/core/Divider';


export default function WorkPage(props) {

    const app =
      [{ 
                images: [ wanderImg0, wanderImg1 ],
                name: "Wandr",
                type: "Web Application"
                },
        {
                images: [ dishTrackerImg0, dishTrackerImg1 ],
                name: "DishTracker",
                type: "Web Application"
      }]
      
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
    },
    photos: {
        maxWidth: "75%",
        maxHeight: "75%",
        display: "block"
    },
    appText: {
      display: "inline-flex"
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
        fontSize: 45,
        letterSpacing: 1,
      },
      h3: {
        fontWeight: 600,
        fontSize: 15,
        letterSpacing: 1.5,
        lineHeight: 1,
      }
    },
  });

  const title4 = createMuiTheme({
    typography: {
      fontFamily: "Playfair Display, Sans-serif",
      h1: {
        fontWeight: 600,
        fontSize: 30,
        letterSpacing: 8,
      }
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
                {app.map((application, i) => (
                  <div >
                  <Grid item className={classes.appText}> 
                  <Grid item direction="column">
                  <Grid item className={classes.photos}>
                    { application.images.map( (images, i) => (
                  <Grid item>
                      <img className={classes.photos} src={images}/>
                  </Grid>
                    ))}
                    </Grid>
                  </Grid>
                  <Grid item direction="column">
                  <Typography variant="h2">
                    {application.name}
                  </Typography>
                  <Typography id={`${application.name}`} variant="h3"> 
                  Wander Application asdfalskdfjsdakfajlaksdjflkasdjlfkjas kjhjh
                  </Typography>
                  </Grid>
                  
                  </Grid>
                  <Divider variant="middle"></Divider>
                  </div>
                    ))}
              </Typography>
            </ThemeProvider>
          </Grid>
        </Grid>
      <a>footer</a>
      </div>
    </ThemeProvider>
  );
}
