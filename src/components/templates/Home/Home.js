import "./home.css";
import NavBar from "../../molecules/NavBar/NavBar";
import * as React from 'react';

import { getData } from '../../../services/getData';
import clock from '../../../assets/clock.png';


export default function Home () {
    const [length, setLength] = React.useState(0);
  
  

  
  React.useEffect(() => {
    const getD = async () => {
    const response = await getData("reservation");

    setLength(response.data.length);
  };
  getD();
  },[length]);
    return (<><div id="global" className="wrapper"><div id="space" className="wrapper">
                <img src={clock} alt="Réservation" id="clockRes"/>
                <span className="text-home"> Tables réservées Aujourd'hui <br></br> {length}</span>
                
            </div>
            </div>
            <NavBar></NavBar></>);
}