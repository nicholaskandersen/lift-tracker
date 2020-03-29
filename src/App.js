import React from 'react';
import logo from './logo.svg';
import './App.css';
import { store } from "./Actions/store";
import { Provider, connect } from "react-redux";
import WorkOut from './Components/workOut';
import { Container } from '@material-ui/core';
function App() {
  return (
      <Provider store={store}>
          <Container maxWidth="lg">
              <WorkOut/>
          </Container>
          
          </Provider>
  );
}

export default App;
