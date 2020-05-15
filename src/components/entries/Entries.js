import React, { useState,useEffect } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import CreateSubEntries from '../entries/CreateSubEntries';


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

const useStylesGrid = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(3),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const Entries = (props) => {

    const classes = useStyles();
    const classesGrid = useStylesGrid();
    

    const [entriId, setentriId] = useState(props)
   
    console.log(props.topicId)
    

    const { entries } = props;
    const { myMessages } = props;
    console.log(myMessages)
   
    if (entries && myMessages) {
        return (
            <div className='useStylesGrid'>
            {entries.filter(item=>item.id===props.topicId).map(item => (
                <div>
                        <Card className={classes.root}>
                            <CardContent>
                                <Typography variant="h5" component="h2" onClick={() => setentriId(item.id)}>
                                    {item.title}

                                </Typography>
                                <Typography variant="h5" component="h2" onClick={() => setentriId(item.id)}>
                                    {item.detail}

                                </Typography>
                                <Typography variant="h5" component="h2" onClick={() => setentriId(item.id)}>
                                    {item.author}

                                </Typography>
                                <Typography variant="h5" component="h2" onClick={() => setentriId(item.id)}>
                                    {item.date}  

                                </Typography>
                            </CardContent>
                        </Card>
                        <br></br>

                    </div>
            ))}
                {myMessages.map(item => (
                    <div>

                        <Card className={classes.root}>
                            <CardContent>
                                <Typography variant="h5" component="h2" onClick={() => setentriId(item.id)}>
                                    {item.title}

                                </Typography>
                                <Typography variant="h5" component="h2" onClick={() => setentriId(item.id)}>
                                    {item.detail}

                                </Typography>
                                <Typography variant="h5" component="h2" onClick={() => setentriId(item.id)}>
                                    {item.email}

                                </Typography>
                                <Typography variant="h5" component="h2" onClick={() => setentriId(item.id)}>
                                    {item.date}  

                                </Typography>
                            </CardContent>
                        </Card>
                        <br></br>

                    </div>
                ))}

                <CreateSubEntries topicId={props.topicId}/>
          

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
    const projects = state.firestore.ordered.entries;
    const mymessages = state.firestore.ordered.myMessages;
  
  
    return {
        entries: projects,
        myMessages: mymessages,
        
    }
}
export default compose(
    connect(mapStateToProps),

    firestoreConnect(props => {
        console.log(props.topicId)
       
       return [{
            collection: 'entries',
            doc: props.topicId,
            subcollections: [{ collection: 'subentries' }],
            storeAs: 'myMessages'
        }]}),
        firestoreConnect([{ collection: 'entries' }])

    
)(Entries)

