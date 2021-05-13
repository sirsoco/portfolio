import HeadShot from "./HeadShot.jpeg";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: { 
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(3),
    margin: 'auto',
    maxWidth: 1170,
  },
  banner: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  navigation: {
    display: 'block',
    float: 'right',
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2)
  },
  bioText: {
    justifyContent: "center",
    display: 'inline-block',
    marginLeft: theme.spacing(60),
  },
  headshot: {
    margin: "auto",
    display: "inline-block",
    height: 274,
    width: 274,
  },
  intro: {
    justifyContent: "center",
    display: 'inline-block',
    marginLeft: theme.spacing(60),
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>

      <Grid container maxWidth='false' container md={4} sm={6} xs={12} >
        <Grid itemclassName={classes.brand}>
          <Typography>
            Solomon Obure
          </Typography>
        </Grid>
        <Grid item md={4} sm={6} xs={12} className={classes.navigation}>
          <ul>
            <li>Work</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </Grid>
      </Grid>
     
    </div>
  );
}

export default App;
