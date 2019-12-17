import React, { useContext } from 'react';
import {makeStyles} from "@material-ui/core/styles/index";

//Material UI components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import { AppContext } from '../App'
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles({
  root: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    margin: 10,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  }
});

export default function Input_one() {
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
            {state.text1}
          </Typography>
        </Paper>
      </Grid>
    </React.Fragment>
  )
}
