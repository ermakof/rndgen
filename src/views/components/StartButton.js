import React, {useContext, useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {AppContext} from "../App";

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(3),
    },
  },
}));

export default function StartButton() {
  const classes = useStyles();
  const {state, dispatch} = useContext(AppContext);
  const [generateOn, setGenerateOn] = useState(false);
  const [intervalId, setIntervalId] = useState(0);
  const [timeoutId, setTimeoutId] = useState(0);

  useEffect(()=> {
    if (generateOn) {
      setIntervalId(
        setInterval(() => {
          dispatch({type: 'START_GENERATE'})
        }, state.roundInterval));
      setTimeoutId(
        setTimeout(() => {
          setGenerateOn(false);
        }, state.roundTimeout));
    } else {
      if (intervalId && timeoutId) {
        clearInterval(intervalId);
        setIntervalId(0);
        clearTimeout(timeoutId);
        setTimeoutId(0);
        dispatch({type: 'STOP_GENERATE'})
      }
    }
  }, [generateOn]);

  const handleClickStartButton = () => {
    setGenerateOn(!generateOn);
  };

  const showMessage = () => {
    if (generateOn) {
      return 'СТОП!'
    } else {
      return `Генерировать числа в диапазоне с ${state.range.min} по ${state.range.max}`
    }
  };

  return (
    <div className={classes.root}>
      <Button variant="contained"
              size="large"
              fullWidth
              color={generateOn ? "secondary" : "primary"}
              onClick={handleClickStartButton}
      >
        {showMessage()}
      </Button>
    </div>
  );
}
