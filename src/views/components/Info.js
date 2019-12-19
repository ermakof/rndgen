import React, { useContext } from 'react';
import {makeStyles} from "@material-ui/core/styles/index";

//Material UI components
import Paper from '@material-ui/core/Paper';

import { AppContext } from '../App'
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    padding: 1,
    position: 'fixed',
    bottom: 10,
    alignItems: 'center',
    width: '80%',
    backgroundColor: 'rgba(255,255,255,0)',
  },
  input: {
    margin: 1,
    flex: 1,
  },
  iconButton: {
    padding: 1,
  }
});

export default function Info() {
  const classes = useStyles();
  const {state} = useContext(AppContext);
  const {version = '', author = '', organization = ''} = state.info;
  return (
      <React.Fragment>
        <Paper className={classes.root}>
          <Typography
              variant="subtitle2"
              color="inherit"
              noWrap
              className={classes.input}
          >
            {`Версия: ${version} Организация: ${organization} Автор: ${author} Время: ${state.loadTime}`}
          </Typography>
        </Paper>
      </React.Fragment>
  )
}
