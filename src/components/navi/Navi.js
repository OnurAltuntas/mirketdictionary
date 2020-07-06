import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../assets/mirket-icon-fixed.png'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import { connect } from 'react-redux'




function Navi({ auth, profile }) {
    //const classes = useStyles();
    //console.log(auth.email)

    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />
    return (

        <div >

            <AppBar style={{ background: '#2E3B55' }} position="static">
                <Toolbar>
                    <div class="container">
                        <div class="row no-gutters">
                            <div class="col-12 col-sm-6 col-md-10"> <img src={logo} alt="logo" height="120" width="263"></img></div>
                            <div class="col-6 col-md-2"> {auth.isLoaded &&
                                links
                            }</div>
                        </div>
                    </div>

                </Toolbar>
            </AppBar>
        </div>

    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}


export default connect(mapStateToProps)(Navi);
