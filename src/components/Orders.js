import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Title from './Title';
import FinCard  from './FinCard';
import SimpleCard  from './SimpleCard';

function preventDefault(event) {
  event.preventDefault();
}
const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Order() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>ВАМ ДОСТУПНЫ СЛЕДУЮЩИЕ МЕРЫ ПОДДЕРЖКИ:</Title>
    
          <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Paper>
        <FinCard/>
        </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
        <Paper>
        <SimpleCard/>
        </Paper>
        </Grid>
        
      </Grid>
    
    </React.Fragment>
  );
}