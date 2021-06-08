import { React, useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export default function Footer(props) {
  const useStyles = makeStyles((props, theme) => ({
    root: {},
    container: {
      display: "inline-flex",
      justify: "center",
      alignItems: "center",
    },
    item: {},
    Icon8: {
      display: props.Icon8,
    },
  }));

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
      <Toolbar position="fixed" color="primary">
        <Grid
          container
          className={classes.container}
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="h6" display="center">
              © {d.getFullYear()}
            </Typography>
            <Typography variant="h6" className={classes.Icon8}>
              Icon8
            </Typography>
          </Grid>
        </Grid>
      </Toolbar>
    </ThemeProvider>
  );
}
