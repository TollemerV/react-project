import React from 'react';
import home from '../../../assets/home_violet.png';
import clock from '../../../assets/clock_violet.png';
import kitchen from '../../../assets/toque_violet.png';
import add from '../../../assets/add.png';
import './navBar.css';
import { useState } from 'react';
import { Link } from "react-router-dom";

function NavBar(props) {

  const [active, setActive] = useState(props.active ? props.active : "0");

  return (
          <nav className="navbar">
            
            <div className={active === "0" ? "active":"setActive"} >
              <Link to="/" onClick={()=>setActive("0")}><img src={home} alt="Accueil"/></Link>
            </div>
            <div className={active === "1" ? "active":"setActive"} >
              <Link to="/reservation-view" onClick={()=>setActive("1")}><img src={clock} alt="Réservation"/></Link>
            </div>
            <div className={active === "2" ? "active":"setActive"} >
              <Link to="/cuisine" onClick={()=>setActive("2")} ><img src={kitchen} alt="Cuisine"/></Link>
            </div>
            <div id="test" className={active === "3" ? "":"setActive"} >
              <Link to="/reservation" onClick={()=>setActive("3")}><img id="add" src={add} alt="Nouvelle réservation"/></Link>

            </div>
          </nav>
      
        );
}

export default NavBar;
