import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import {getTheme} from './themes/default.js';
import NoPage from './components/templates/NoPage/NoPage';
import Reservation from './components/templates/Reservation/Reservation';
import ReservationView from './components/templates/ReservationView/ReservationView';
import Home from './components/templates/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
          <>
            <Router>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/reservation" element={<Reservation/>}/>
                <Route path="/reservation-view" element={<ReservationView/>}/>
                <Route path="*" element={<NoPage />} />
              </Routes>
            </Router>
          </>    
    
  );
};
