import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Toolbar from "@material-ui/core/Toolbar";
import {AppContext} from "../App";

const useStyles = makeStyles({
  root: {
    width: 700,
  },
  toolbarTitle: {
    flex: 1,
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider() {
  const classes = useStyles();

  const {state, dispatch} = useContext(AppContext);

  const handleChange = (event, range) => {
    dispatch({ type: 'UPDATE_RANGE', payload: {range} });
  };

  return (
    <div className={classes.root}>
      <Toolbar>
        <Typography
          component="h2"
          variant="h4"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          Укажите диапазон выбора чисел
        </Typography>
      </Toolbar>
      <Slider
        value={[state.rangeMin, state.rangeMax]}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
      />
    </div>
  );
}
