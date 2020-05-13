import React from 'react'
import { NavLink } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const SingedOutLinks = () => {


    return (
        <ul className="right">
            <Link to="/signup" style={{ textDecoration: 'none', color: 'white' }}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <VpnKeyIcon />SignUp
            </IconButton>
            </Link>

            <Link to="/signin" style={{ textDecoration: 'none', color: 'white' }}><IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
            >

                <ArrowForwardIcon />Login
        </IconButton></Link>


        </ul>
    )
}


export default SingedOutLinks;