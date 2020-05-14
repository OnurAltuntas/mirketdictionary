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
import Grid from '@material-ui/core/Grid';

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
    const [entriId, setentriId] = useState({})

    const handleClick = (item) => {

        setentriId('item.id')
        console.log(entriId)
        console.log('click')
    }

    const { entries } = props;
    console.log(entries)
    if (entries) {
        return (
            <div className='useStylesGrid'>
                <Grid container spacing={4}>
                <Grid item xs={6} sm={3}>
                {entries.map(item => (
                    <div>
                       
                            <Card className={classes.root}>
                                <CardContent>
                                    <Typography variant="h5" component="h2" onClick={() => setentriId(item.id)}>
                                        {item.title}
                                    </Typography>
                                </CardContent>
                            </Card>
                            <br></br>
                      
                    </div>
                ))}
                  </Grid>
                   
                    {entries.filter(item => item.id === entriId).map(item => (
                        <Grid item xs={18} sm={6}>
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
                                </Card>
                                {item.subentries ? <Card className={classes.root}>
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        {item.subentries.title}
                                    </Typography>
                                    <Typography className={classes.pos} color="textSecondary">
                                        {item.subentries.email}
                                    </Typography>
                                    <Typography variant="body2" component="p">
                                        {item.subentries.detail}
                                        <br /> <br />
                                        {item.subentries.date}  {item.subentries.author}
                                    </Typography>

                                </CardContent>

                            </Card> :null}
                                
                            
                        </Grid>
                    ))}
                </Grid>

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