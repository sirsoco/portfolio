import { React, useEffect, useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import LinkedInIcon from "../public/icons8-linkedin.svg";
import GitHubIcon from "../public/icons8-github.svg";
import Footer from "../components/Footer/Footer.js";

export default function ContactPage(props) {
  const [Icon8, setIcon8] = useState("");

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
    container1: {
      padding: "50px",
    },
    title3: {
      marginTop: "45px",
      marginBottom: "5px",
      paddingBottom: "50px",
    },
    email: {
      width: "auto",
      height: "auto",
      padding: "100px",
      border: "4px solid",
    
    },
    email1: {
      paddingRight: "50px",
    },
    email2: {
      paddingBottom: "80px"
    },
    email3: {
      paddingRight: "80px"
    },
    email4: {
      paddingRight: "70px"
    },
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
      h5: {
        fontWeight: 300,
        fontSize: "35px",
        letterSpacing: "",
        lineHeight: "",
      },
    },
  });

  useEffect((props) => {
    setIcon8("in-line")
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
              <Grid item className={classes.email3}>
                <Typography variant="h2">Get in touch.</Typography>
              </Grid>
              <a className={classes.email}>
                <Grid item direction="column">
                  <Grid className={classes.email2}item>
                    <Typography
                      className={classes.email1}
                      variant="h5"
                      display="inline"
                    >
                      Email
                    </Typography>
                    <a>
                      <Typography variant="h6" display="inline">
                        sobure@socodezine.com
                      </Typography>
                    </a>
                  </Grid>
                  <Grid item>
                    <Typography
                      className={classes.email1}
                      variant="h5"
                      display="inline"
                    >
                      Social
                    </Typography>
                    <a className={classes.email4} href='https://www.linkedin.com/in/solomonobure/' target='_blank'>
                      <img src={LinkedInIcon}  />
                    </a>
                    <a  href='https://github.com/sirsoco' target='_blank'>
                      <img src={GitHubIcon} />
                    </a>
                  </Grid>             
                </Grid>
              </a>
            </Grid>
          </ThemeProvider>
        </Grid>
      </Grid>
      <Footer></Footer>
    </div>
  );
}
