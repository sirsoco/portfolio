import logo from './logo.svg';
import landingPage from './landingPage.js';
import Container from '@material-ui/core/Container';
import HeadShot from './HeadShot.jpeg'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
;
import Typography from '@material-ui/core/Typography';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  container: {
    padding: theme.spacing()
  },
  bioText: {
   justifyContent: 'center',
   marginLeft: theme.spacing(60)
  },
  HeadShot: {
    margin: 'auto',
    display: 'block',
    height: 274,
    width: 274
  },
}))

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
            <Grid className={classes.container} container>
              <Grid item>
                <img className={classes.HeadShot} src={HeadShot}/>
              </Grid>
            <Grid  className= {classes.bioText}item>
              <Typography align='center'>
                Solomon Obure
              </Typography>
              <Typography align='center'>
                Full Stack Engineer
              </Typography>
              <Typography align='center'>
                remote
              </Typography>
            </Grid>
          
            </Grid>
    </div>
  );
}

export default App;
