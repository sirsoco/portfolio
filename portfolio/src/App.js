import logo from './logo.svg';
import landingPage from './landingPage.js';
import Container from '@material-ui/core/Container';
import HeadShot from './HeadShot.jpeg'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid'
;
import Typography from '@material-ui/core/Typography';
import './App.css';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    background: '17181C',
    display: 'inline'
  },
  bioText: {
   justifyContent: 'center'
  },
  HeadShot: {
    height: 274,
    width: 274
  },
})
function App() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
            <Grid  container>
              <Grid item>
                <img className={classes.HeadShot} src={HeadShot}/>
              </Grid>
            <Grid  className= {classes.bioText}item>
              <Typography>
                Solomon Obure
              </Typography>
              <Typography>
                Full Stack Engineer
              </Typography>
              <Typography>
                remote
              </Typography>
            </Grid>
          
            </Grid>
    </Container>
  );
}

export default App;
