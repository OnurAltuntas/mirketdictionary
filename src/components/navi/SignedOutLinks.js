import React from 'react'
import { NavLink } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';

import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const SingedOutLinks = () => {
    return (
        <ul className="right">
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
            >
                 <VpnKeyIcon />SignUp
            </IconButton>
            <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
        >
            <ArrowForwardIcon />Login
        </IconButton>
        </ul>
    )
}


export default SingedOutLinks;