import React from 'react'
import { NavLink } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {signOut} from '../../redux/actions/authActions'
import {connect} from 'react-redux'


const SignedInLinks = ({signOut,profile}) => {
    //console.log(profile.email)
    return (
        <ul className="right">
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={signOut}
            >
                 <ExitToAppIcon />LogOut
            </IconButton>
            <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
        >
            <AccountCircle />{profile.email}
        </IconButton>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) =>{
    return {
        signOut: () => dispatch (signOut())
    }
}


export default connect(null,mapDispatchToProps)(SignedInLinks);