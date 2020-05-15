import React, { useState } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Entries from '../entries/Entries';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';

const ColorLinearProgress = withStyles({
    colorPrimary: {
      backgroundColor: '#b2dfdb',
    },
    barColorPrimary: {
      backgroundColor: '#00695c',
    },
  })(LinearProgress);

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

const useStyles_ = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const Topics = (props) => {
    const { topics } = props;
    const classes = useStyles();
    const clasess_ = useStyles_()
    const initialState = 'cYc955rUg1lYXmlEpU7F'
    const [entriId, setentriId] = useState(initialState)


    const handleClick = (item) => {
        console.log(item.id)
        console.log('click')
    }


    if (topics) {
        return (
            <div>

                <Grid container spacing={3}>
                    <Grid item xs={3} >
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography variant="h5" component="h2"  >
                                    TOPICS
                        </Typography>
                            </CardContent>
                        </Card><br></br>
                        {topics.map(item => (
                            <div>
                                <Card className={clasess_.root}  onClick={() => setentriId(item.id)}>
                                    <CardContent>
                                        <Typography variant="h5" component="h2"  >
                                            {item.title}
                                        </Typography>
                                    </CardContent>
                                </Card>
                                <br></br>
                            </div>
                        ))}
                    </Grid>

                    <Grid item xs={5}>
                        <Entries topicId={entriId} />
                    </Grid>
                </Grid>
            </div>
        )
    } else {
        return (
            <div className="container center">
            <br></br>
            <ColorLinearProgress className={classes.margin} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {

    const topic = state.firestore.ordered.entries;
    //console.log(topic)
    return {
        topics: topic
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{ collection: 'entries' }])
)(Topics)
