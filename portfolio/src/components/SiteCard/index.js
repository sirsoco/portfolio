import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import styles from "./SiteCard.module.css";

const works = createMuiTheme({
  typography: {
    fontFamily: "Playfair Display, Sans-serif",
    letterSpacing: "8",
    h1: {
      fontWeight: 600,
      fontSize: 30,
      letterSpacing: 1.5,
    },
  },
});



const App = (props) => {
  
const [app, setApp] = useState([props])
  return (
    <div className="users">
    <ThemeProvider theme={works}>
    {app.map((app, i) => (
     
      <Typography key={i}>
        {app.name}
      </Typography>
    
    ))
    }
      </ThemeProvider>
    
   </div>
    );
  }
    
  export default App;

   
        {/* <img className={styles.img}src={app.img}></img>
        <img className={styles.img}src={app.img}></img> */}
        {/* <div className={styles.content}>
          <div className={styles.contentItems}>
            <h3>{app.name}</h3>

        })
            <div className={styles.row}>
              <a className={styles.boxleft}>{app.type}</a>
              <a classNames={styles.boxright}>2020</a>
          </div>
          </div>
        </div>
        <footer className={styles.contentItems}>
          <div className={styles.row}>
            <a>{app.author}</a>
            <div className={styles.tech}>
              <span className={styles.react}>react</span>
              <span className={styles.react}>node.js</span>
              <span className={styles.react}>express</span>
            </div>
          </div>
        </footer>
      </div>
     */}
  
  
