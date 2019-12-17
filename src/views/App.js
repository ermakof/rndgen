import React, {useEffect, useReducer} from 'react';

//Material UI components
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';

//Import our Inputs
import Input_one from './components/Input_one';
import Input_two from './components/Input_two';
import Input_three from './components/Input_three';
import Counter from './components/Counter';

import logo from '../logo1.png';
import '../App.css';
import RangeSlider from './components/RangeSlider';
import StartButton from './components/StartButton';
import {read} from '../utils';

export const AppContext = React.createContext();

const initialState = {
  text1: 0,
  text2: 0,
  text3: 0,
  rangeMin: 0,
  rangeMax: 100,
  counter: 0,
  results: [],
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function reducer(state, action) {
  switch (action.type) {
    case 'RELOAD_COUNTER':
      return {
        ...state,
        counter: 0,
      };
    case 'UPDATE_RANGE':
      return {
        ...state,
        rangeMin: action.payload.range[0],
        rangeMax: action.payload.range[1],
      };
    case 'START_GENERATE':
      return {
        ...state,
        text1: getRandomInt(state.rangeMin, state.rangeMax),
        text2: getRandomInt(state.rangeMin, state.rangeMax),
        text3: getRandomInt(state.rangeMin, state.rangeMax),
        counter: state.counter+1,
      };
    case 'UPDATE_RESULTS':
      return {
        ...state,
        results: action.payload.result,
      };
    default:
      return initialState;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    read((results) => {
      dispatch({ type: 'UPDATE_RESULTS', payload: {results} });
    });
  }, []);

  return (
      <div className="App">
        <header className="App-header">
          <AppContext.Provider value={{state, dispatch}}>
            <img src={logo} className="App-logo" alt="logo"/>
            <RangeSlider/>
            <Counter />
            <Container maxWidth="lg">
              <CssBaseline/>
              <StartButton/>
              <Grid container spacing={1}>
                <Input_one/>
                <Input_two/>
                <Input_three/>
              </Grid>
            </Container>
          </AppContext.Provider>
        </header>
      </div>
  );
}

export default App;
