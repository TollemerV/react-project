import "./home.css";
import NavBar from "../../molecules/NavBar/NavBar";
import * as React from 'react';

import { getData } from '../../../services/getData';
import clock from '../../../assets/clock.png';
import toque from '../../../assets/toque.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Home () {

  const [length, setLength] = React.useState(0);
  
  React.useEffect(() => {
    const getD = async () => {
    const response = await getData("reservation");

    setLength(response.data.length);
  };
  getD();
  },[length]);
    return (<>
    <div className="container"> 
    <h1> Tableau de bord</h1>
    <Carousel centerMode>
      <div className="wrapper card-home">
        <img src={clock} alt="Réservation" id="clockRes"/>
        <span className="text-home">Tables réservées Aujourd'hui</span>
        <span className="number">{length}</span>
      </div>
      <div className="wrapper card-home">
        <img src={toque} alt="Réservation" id="clockRes"/>
        <span className="text-home">Tables réservées Aujourd'hui</span>
        <span className="number">{length}</span>
      </div>
    </Carousel>
     
    </div>

    <NavBar></NavBar></>);
}