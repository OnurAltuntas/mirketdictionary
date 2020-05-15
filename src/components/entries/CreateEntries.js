import React, { Component } from "react"
import { connect } from "react-redux"
import { createProject } from '../../redux/actions/createEntriesActions'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));



class AddOrUpdateProduct extends Component {
    
    state = {
        title: '',
        detail: '',
        date: '',
        author: ''
    }
    

    handleChange = (e) => {
        const date=this.getDateNow()
        this.setState({
            [e.target.id]: e.target.value,
            date:date,
            author:this.props.auth.email
            
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.createProject(this.state)
    }

    getDateNow = () => {
        var today = new Date();
        var day = today.getDate() + "";
        var month = (today.getMonth() + 1) + "";
        var year = today.getFullYear() + "";
        var hour = today.getHours() + "";
        var minutes = today.getMinutes() + "";
        var seconds = today.getSeconds() + "";
        
        const date = day + "/" + month + "/" + year + " " + hour + ":" + minutes + ":" + seconds
        return date;
    }

    render() {
      
        return (
            <div>
            <form  noValidate>
                <TextField
                    id="title"
                    label="Header"
                    placeholder="Entrie Header"
                    multiline
                    variant="outlined"
                    onChange={this.handleChange}
                /><br></br>
                <br></br>
                <TextField
                    id="detail"
                    label="Detail"
                    placeholder="Enterie Detail"
                    multiline
                    variant="outlined"
                    onChange={this.handleChange}
                /><br></br>
                <br></br>
                <Button variant="contained" color="primary" disableElevation onClick={this.handleSubmit} >Submit</Button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project))
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct)

