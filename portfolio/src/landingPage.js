import React from 'react';
import Container from '@material-ui/core/Container';
import HeadShot from './HeadShot.jpeg'
import Grid from '@material-ui/core/Grid';



export default function landingPage(props) {
    return(
        <Container>
            <Grid>
                <img src={HeadShot}/>
            </Grid>
            
        </Container>
    )
}