import React from 'react';
import './App.css';
import NoPage from './components/templates/NoPage/NoPage';
import Reservation from './components/templates/Reservation/Reservation';
import ReservationView from './components/templates/ReservationView/ReservationView';
import Home from './components/templates/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cuisine from './components/templates/Cuisine/Cuisine';
import Stock from './components/templates/Stock/Stock';
import Inventory from './components/templates/Inventory/Inventory';
import Menu from './components/templates/Menu/Menu';
import Cmd from './components/templates/Cmd/Cmd';
export default function App() {
  return (
          <>
            <Router>
              <Routes>

                <Route path="/" element={<Home/>}/>
                <Route path="/reservation" element={<Reservation/>}/>
                <Route path="/reservation-view" element={<ReservationView/>}/>
                <Route path="/cuisine" element={<Cuisine/>}/>
                <Route path="/cmd" element={<Cmd/>}/>
                <Route path="/inventaire" element={<Stock/>}/>
                <Route path="/gestion-de-stock" element={<Inventory/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="*" element={<NoPage />} />
              </Routes>
            </Router>
          </>    
    
  );
};
