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
            
            <div className={active === "0" ? "active":"setActive"} onClick={()=>setActive("0")}>
              <Link to="/" ><img src={home} alt="Accueil"/></Link>
            </div>
            <div className={active === "1" ? "active":"setActive"} onClick={()=>setActive("1")}>
              <Link to="/reservation-view" ><img src={clock} alt="Réservation"/></Link>
            </div>
            <div className={active === "2" ? "active":"setActive"} onClick={()=>setActive("2")}>
              <Link to="/cuisine" ><img src={kitchen} alt="Cuisine"/></Link>
            </div>
            <div id="test" className={active === "3" ? "":"setActive"} onClick={()=>setActive("3")}>
              <Link to="/reservation" ><img id="add" src={add} alt="Nouvelle réservation"/></Link>
            </div>
          </nav>
      
        );
}

export default NavBar;
