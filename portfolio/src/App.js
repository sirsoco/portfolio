import HeadShot from "./HeadShot.jpeg";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import zIndex from "@material-ui/core/styles/zIndex";

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
    marginTop: "52px",
  },
  menu: {
    display: "block",
    paddingLeft: "15px",
    paddingRight: "15px",
  },
}));

const title = createMuiTheme({
  typography: {
    fontFamily: "Sourcecode Pro, monospace",
    fontSize: "16",
    fontWeight: "300",
    letterSpacing: "1",
    h1: {
      fontWeight: 400,
      fontSize: 18,
    },
  },
});

const menu = createMuiTheme({
  typography: {
    fontFamily: "Sourcecode Pro, monospace",
    fontSize: "12px",
    h2: {
      fontWeight: 300,
      fontSize: 12,
    },
  },
});

const title2 = createMuiTheme({
  typography: {
    fontFamily: "Playfair Display, Sans-serif",
    fontSize: "30px",
    h1: {
      "fontWeight": 600,
      "fontSize": 30,

    },
  },
});

function App() {
  const classes = useStyles();
  return (
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
                <Grid className={classes.menu} item>
                  <Typography variant="h2">ABOUT</Typography>
                </Grid>
                <Grid className={classes.menu} item>
                  <Typography variant="h2">WORK</Typography>
                </Grid>
                <Grid className={classes.menu} item>
                  <Typography variant="h2">CONTACT</Typography>
                </Grid>
              </ThemeProvider>
            </Grid>
          </Grid>
        </div>
        <Grid container className={classes.container}>
          <Grid item md={4} sm={6} xs={12}>
            <ThemeProvider theme={title2}>
              <Typography variant="h1">
                <Box className={classes.title2} letterSpacing={1} m={1}>
                Product/Portrait/Travel
                </Box>
              </Typography>
            </ThemeProvider>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
