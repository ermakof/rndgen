import React, {useEffect, useReducer} from 'react';

//Material UI components
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';

//Import our Inputs
import Number1 from './components/Number1';
import Number2 from './components/Number2';
import Number3 from './components/Number3';
import Counter from './components/Counter';
import Info from './components/Info';

import logo from '../logo1.png';
import '../App.css';
import RangeSlider from './components/RangeSlider';
import StartButton from './components/StartButton';
import { read } from '../utils';
import { reducer, initialState } from '../reducer';

export const AppContext = React.createContext();

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
                <Number1/>
                <Number2/>
                <Number3/>
              </Grid>
            </Container>
            <Info />
          </AppContext.Provider>
        </header>
      </div>
  );
}

export default App;
