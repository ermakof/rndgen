import React, { useContext } from 'react';
import {makeStyles} from "@material-ui/core/styles/index";

//Material UI components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import { AppContext } from '../App'

const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: '8px',
    flex: 1,
  },
  iconButton: {
    padding: 10,
  }
});

export default function Input_two() {
  const classes = useStyles();

  const { state } = useContext(AppContext);

  return(
    <React.Fragment>
      <Grid item xs={12} md={4}>
        <Paper className={classes.root}>
          <TextField
            className={classes.input}
            label="Третье число"
            variant="outlined"
            value={state.inputText3}
            disabled
          />
        </Paper>
      </Grid>
    </React.Fragment>
  )
}
