import React from 'react';
import './App.css';
import NoPage from './components/templates/NoPage/NoPage';
import Reservation from './components/templates/Reservation/Reservation';
import ReservationView from './components/templates/ReservationView/ReservationView';
import Home from './components/templates/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cuisine from './components/templates/Cuisine/Cuisine';
import InventaireView from './components/templates/InventaireView/InventaireView';
export default function App() {
  return (
          <>
            <Router>
              <Routes>

                <Route path="/" element={<Home/>}/>
                <Route path="/reservation" element={<Reservation/>}/>
                <Route path="/reservation-view" element={<ReservationView/>}/>
                <Route path="/cuisine" element={<Cuisine/>}/>
                <Route path="/inventaire" element={<InventaireView/>}/>
                <Route path="*" element={<NoPage />} />
              </Routes>
            </Router>
          </>    
    
  );
};
