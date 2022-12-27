import "./home.css";
import NavBar from "../../molecules/NavBar/NavBar";
import * as React from 'react';

import { getData } from '../../../services/getData';
import clock from '../../../assets/clock.png';


export default function Home () {
    const [length, setLength] = React.useState(0);
  
  

  const getD = async () => {
    const response = await getData("reservation");

    setLength(length + response.data.length);
  };
  React.useEffect(() => {
    getD();
  },[]);
    return (<><div className="wrapper">
                <img src={clock} alt="Réservation"/>
                <span className="text"> Tables réservées Aujourd'hui <br></br> {length}</span>
                
            </div>
            <NavBar></NavBar></>);
}