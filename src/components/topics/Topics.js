import React,{useState} from 'react'
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


const Topics =(props)=>{
    const { topics } = props;
    const classes = useStyles();
    console.log(topics)

    const handleClick =(item)=>{
        console.log(item.id)
        console.log('click')
    }
    

    if (topics) {
        return (
            <div>
                {topics.map(item => (
                    <div>
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography variant="h5" component="h2" onClick={() => handleClick(item)}>
                                {item.title}
                            </Typography>
                        </CardContent>
                       
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
    console.log(state)
    const topic= state.firestore.ordered.entries;
    //console.log(topic)
    return {
        topics: topic
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'entries' }])
)(Topics)
