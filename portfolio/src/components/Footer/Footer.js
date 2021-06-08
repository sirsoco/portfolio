import { React, useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function Footer(props) {
    const useStyles = makeStyles((props,theme) => ({
        root: {
 
        },
        Icon8: {
            display: props.Icon8
        },
    }))

  const d = new Date();

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
const classes = useStyles();
  return (
    <ThemeProvider theme={footer}>
      <Grid container justify="center" alignItems="center">
        <Grid item direction="column" display="block">
          <Toolbar position="fixed" color="primary">
            <Typography variant="h6" display="center">
              © {d.getFullYear()}
            </Typography>
          </Toolbar>
        </Grid>
        <Grid item direction="column" display="block" className={classes.Icon8}>
          <Typography variant="h6" display="center">
            Icon8
          </Typography>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
