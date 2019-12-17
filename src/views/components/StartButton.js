import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {AppContext} from "../App";

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(10),
    },
  },
}));

export default function StartButton() {
  const classes = useStyles();
  const {state, dispatch} = useContext(AppContext);

  const handleClickStartButton = () => {
    dispatch({ type: 'START_GENERATE' });
  };

  return (
    <div className={classes.root}>
      <Button variant="contained"
              color="primary"
              onClick={handleClickStartButton}
      >
        {`Генерировать числа в диапазоне с ${state.rangeMin} по ${state.rangeMax}`}
      </Button>
    </div>
  );
}
