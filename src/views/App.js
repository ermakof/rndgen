import React, { useReducer } from 'react';

//Material UI components
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';

//Import our Inputs
import Input_one from './components/Input_one';
import Input_two from './components/Input_two';
import Input_three from './components/Input_three';

import logo from '../logo1.png';
import '../App.css';
import RangeSlider from './components/RangeSlider';
import StartButton from './components/StartButton';

export const AppContext = React.createContext();

const initialState = {
  inputText1: 0,
  inputText2: 0,
  inputText3: 0,
  rangMin: -100,
  rangMax: 100,
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function reducer(state, action) {
  switch (action.type) {
    case 'UPDATE_RANG_MIN':
      return {
        rangMin: action.data
      };
    case 'UPDATE_RANG_MAX':
      return {
        rangMax: action.data
      };
    case 'START_GENERATE':
      return {
        inputText1: getRandomInt(state.rangMin, state.rangMax),
        inputText2: getRandomInt(state.rangMin, state.rangMax),
        inputText3: getRandomInt(state.rangMin, state.rangMax),
      };
    default:
      return initialState;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Container maxWidth="lg">
          <CssBaseline />

          <RangeSlider />
            <AppContext.Provider value={{ state, dispatch }}>
              <StartButton />
              <Grid container spacing={1}>
                <Input_one/>
                <Input_two/>
                <Input_three/>
              </Grid>
            </AppContext.Provider>

        </Container>
      </header>
    </div>
  );
}

export default App;
