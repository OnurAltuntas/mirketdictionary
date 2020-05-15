import React from 'react'
import { NavLink } from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {signOut} from '../../redux/actions/authActions'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'



const SignedInLinks = ({signOut,auth}) => {
    //console.log(profile.email)
    //console.log(auth.email)
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
            <Link to="/CreateEntries" style={{ textDecoration: 'none', color: 'white' }}> 
            <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        >
                        <AccountCircle />{auth.email}
                    </IconButton>
            
            </Link>
           
        </ul>
    )
}

const mapStateToProps = (state)=>{

    return{
        auth:state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        signOut: () => dispatch (signOut())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SignedInLinks);