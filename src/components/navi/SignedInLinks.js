import React from 'react'
import { NavLink } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


const SignedInLinks = () => {
    return (
        <ul className="right">
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
            >
                 <ExitToAppIcon />LogOut
            </IconButton>
            <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
        >
            <AccountCircle />
        </IconButton>
        </ul>
    )
}


export default SignedInLinks;