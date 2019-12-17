import React, { useContext } from 'react';
import {makeStyles} from "@material-ui/core/styles/index";

//Material UI components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

//Material UI Icons
import IconButton from '@material-ui/core/IconButton';
import RefreshIcon from '@material-ui/icons/Refresh';

import { AppContext } from '../App'
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    padding: 10,
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  input: {
    margin: 5,
    flex: 1,
  },
  iconButton: {
    padding: 5,
  }
});

export default function Counter() {
  const classes = useStyles();
  const { state, dispatch } = useContext(AppContext);

  const handlerClick = () => {
    dispatch({ type: 'UPDATE_COUNTER', payload: {counter: 0} });
  };

  return(
    <React.Fragment>
      <Grid item xs={12} md={10}>
        <Paper className={classes.root}>
          <IconButton
            aria-label="reload-counter"
            onClick={handlerClick}
            label={'Обнулить'}
          >
            <RefreshIcon />
          </IconButton>
          <Typography
              variant="h6"
              color="inherit"
              align="center"
              noWrap
              className={classes.input}
          >
            {`Раунд № ${state.counter}`}
          </Typography>
        </Paper>
      </Grid>
    </React.Fragment>
  )
}
