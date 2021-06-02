import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export default function Footer() {
    return(
        <Toolbar position="fixed" color="primary">
            <a>©{new Date.prototype.getFullYear()}</a>
        </Toolbar>
    )
}