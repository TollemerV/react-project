import React from 'react';
import home from './assets/home.png';
import clock from './assets/clock.png';
import kitchen from './assets/kitchen.png';
import './App.css';
import { useState } from 'react';

function App() {

  const [active, setActive] = useState(0);

  return (
    <div className="App">
      <div>
        <h1>
          {(["Accueil","Réservation","Cuisine"])[active]}
        </h1>
      </div>
      <nav className="navbar">
        <div className={active === 0 ? "active":"setActive"} onClick={()=>setActive(0)}>
          <img src={home} alt="Accueil"/>
        </div>
        <div className={active === 1 ? "active":"setActive"} onClick={()=>setActive(1)}>
          <img src={clock} alt="Réservation"/>
        </div>
        <div className={active === 2 ? "active":"setActive"} onClick={()=>setActive(2)}>
          <img src={kitchen} alt="Cuisine"/>
        </div>
      </nav>
    </div>
  );
}

export default App;
