import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default function ContactPage() {
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
    }))

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
            fontWeight: 550,
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
    <div className={classes.root}>
      <Grid container className={classes.container}>
        <Grid item md={12} sm={6} xs={12}>
          <ThemeProvider theme={title3}>
            <Typography variant="h1">
              <Box className={classes.title3} letterSpacing={6}>
                Contact
              </Box>
            </Typography>
        <Grid container md={12} sm={6} xs={12}>
            <Grid item>
                <Typography variant="h2">
                    Get in touch.
                </Typography>
            </Grid>
            <Grid item direction="column">
                <Grid item>
                    <a>Email</a>
                    <a>sobure@socodezine.com</a>
                </Grid>
                <Grid item>
                    <a>Social</a>
                    <a>Linkedin</a>
                    <a>Github</a>
                </Grid>
            </Grid>
        </Grid>
          </ThemeProvider>
        </Grid>
      </Grid>
    </div>
  );
}
