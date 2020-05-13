import React, { useState } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 25,
    },
    pos: {
        marginBottom: 12,
    },
});


const Entries = (props) => {
    const classes = useStyles();

    const { entries } = props;

    if (entries) {
        return (
            <div>
                {entries.map(item => (
                    <div>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {item.title}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                {item.email}
                            </Typography>
                            <Typography variant="body2" component="p">
                                {item.detail}
                                <br /> <br />
                                {item.date}  {item.author}
                            </Typography>
                            
                        </CardContent>
                        <CardActions>
                            <Button size="small">Share on twitter</Button>
                        </CardActions>
                    </Card>
                    <hr></hr>
                    </div>
                   
                ))}
               


            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading projects...</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    const projects = state.firestore.ordered.entries;

    return {
        entries: projects
    }
}
export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'entries' }])
)(Entries)