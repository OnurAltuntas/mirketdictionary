import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {signOut} from '../../redux/actions/authActions'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import logout from '../assets/logout.png'
import signup from '../assets/signup.png'


const SignedInLinks = ({signOut,auth}) => {

    return (
        <ul className="right">
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
                onClick={signOut}
            >
            <img src={logout} alt="login" height="30" width="30"></img> <h3></h3>
            </IconButton>
            <Link to="/CreateEntries" style={{ textDecoration: 'none', color: 'white' }}> 
            <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        >
                        <img src={signup} alt="login" height="30" width="30"></img><h3></h3>
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