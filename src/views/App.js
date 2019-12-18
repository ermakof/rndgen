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
import Info from './components/Info';

import logo from '../logo1.png';
import '../App.css';
import RangeSlider from './components/RangeSlider';
import StartButton from './components/StartButton';
import { read, arrayToObject } from '../utils';

export const AppContext = React.createContext();

const initialState = {
  number1: 0,
  number2: 0,
  number3: 0,
  info: {},
  range: {
    min: 0,
    max: 100
  },
  results: [],
  loadTime: '',
  roundCounter: 0,
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function reducer(state, action) {
  console.log('Reducer state:');
  console.log(state);
  console.log('Reducer action:');
  console.log(action);
  switch (action.type) {
    case 'RELOAD_COUNTER':
      return {
        ...state,
        roundCounter: 0,
      };
    case 'UPDATE_RANGE':
      return {
        ...state,
        range: {
          min: action.payload.range[0],
          max: action.payload.range[1],
        }
      };
    case 'START_GENERATE':
      const roundCounter = state.roundCounter + 1;
      let number1 = getRandomInt(state.range.min, state.range.max);
      let number2 = getRandomInt(state.range.min, state.range.max);
      let number3 = getRandomInt(state.range.min, state.range.max);
      if (state.results.length > 0) {
        const results = arrayToObject(state.results, 'round');
        const round = results[roundCounter];
        if (round) {
          if (round.number1) {
            number1 = round.number1;
          }
          if (round.number2) {
            number2 = round.number2;
          }
          if (round.number3) {
            number3 = round.number3;
          }
        }
      }
      return {
        ...state,
        number1,
        number2,
        number3,
        roundCounter,
      };
    case 'UPDATE_CONFIG':
      return {
        ...state,
        ...action.payload.data,
      };
    default:
      return initialState;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    read((data, path) => {
      dispatch({ type: 'UPDATE_CONFIG', payload: {data} });
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
            <Info />
          </AppContext.Provider>
        </header>
      </div>
  );
}

export default App;
