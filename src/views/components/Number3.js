import React, { useContext } from 'react';
import {makeStyles} from "@material-ui/core/styles/index";

//Material UI components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { AppContext } from '../App'
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    padding: 5,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.4)',
  },
  input: {
    margin: 5,
    flex: 1,
  },
  iconButton: {
    padding: 5,
  }
});

export default function Number3() {
  const classes = useStyles();

  const { state } = useContext(AppContext);

  return(
    <React.Fragment>
      <Grid item xs={12} md={4}>
        <Paper className={classes.root}>
          <Typography
              component="h2"
              variant="h1"
              color="inherit"
              align="center"
              noWrap
              className={classes.input}
          >
            {state.number3}
          </Typography>
        </Paper>
      </Grid>
    </React.Fragment>
  )
}
