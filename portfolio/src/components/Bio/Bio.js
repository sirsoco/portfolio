import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
    flexGrow: "1",
    backGroundColor: "#FFFF00",
    width: "25%",
    height: "25%",
    },
}))
export default function Bio() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.root}>
                <a>Hello</a>
            </div>
        </div>
    )
}