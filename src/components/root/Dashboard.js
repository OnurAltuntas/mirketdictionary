import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Entries from '../entries/Entries'
import CreateEntries from '../entries/CreateEntries'
import Topics from '../topics/Topics';


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

export default function FullWidthGrid() {
  const classesGrid = useStylesGrid();

  return (
    <div className={classesGrid.root}>
     <Topics/>
     
    
    </div>
  );
}