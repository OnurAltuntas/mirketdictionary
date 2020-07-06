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
        const date = this.getDateNow()
      
        this.setState({
            
            [e.target.id]: e.target.value,
            date: date,
            author: this.props.auth.email

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
            <div className="container">
                <h2><span class="badge badge-pill badge-light">Create Entrie</span></h2>
                <form>
                    <div class="form-group">
                        <label for="title">Header</label>
                        <input type="text" class="form-control" id="title" aria-describedby="title" onChange={this.handleChange}></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1">Details</label>
                        <textarea class="form-control" id="detail" rows="3" onChange={this.handleChange}></textarea>
                    </div>
                    <button style={{ background: '#2E3B55' }} type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
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

