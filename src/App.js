import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js'
import Reservation from './components/templates/Reservation/Reservation';
export default function App() {
  return (
    <>
    <ThemeProvider theme={getTheme()}>
    <div className="App">
      Ganeshka toolkit
    </div>
    </ThemeProvider>
    <Reservation />
    </>
  );
};
