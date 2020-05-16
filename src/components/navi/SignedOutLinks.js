import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom'
import login from '../assets/login.png'
import signup from '../assets/signup.png'




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
                <img src={signup} alt="login" height="50" width="50"></img><h2>signup</h2>
            </IconButton>
            </Link>

            <Link to="/signin" style={{ textDecoration: 'none', color: 'white' }}><IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
            >

            <img src={login} alt="login" height="50" width="50"></img> <h2>Login</h2>
        </IconButton></Link>


        </ul>
    )
}


export default SingedOutLinks;