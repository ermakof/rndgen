import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppContext} from "../App";

//Material UI Icons
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Loader() {
  const classes = useStyles();
  const { state } = useContext(AppContext);

  return (
    <div className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="loader">
        <CircularProgress />
      </IconButton>
    </div>
  );
}
