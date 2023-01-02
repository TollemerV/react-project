
import * as React from 'react';
import "./reservationView.css";
import { getData } from '../../../services/getData';
import NavBar from '../../molecules/NavBar/NavBar';
import moment from 'moment';


function ReservationView (){

  moment.locale('fr');  
  const [reservations, setReservations] = React.useState([]);

 React.useEffect(() => {
      const getD = async () => {
        const response = await getData("reservation");

        setReservations([...response.data]);
  };
    getD();
  },[reservations]);

    return <>

    <div id='container' className="wrapper">
      <h1>Réservation du jour</h1>
      <table>
        <tbody>
            <tr>
                <th>Nom</th>
                <th>Date</th>
                <th>Nombre de personne(s)</th>
            </tr>
            <tr className="espace">
              <td></td>
            </tr>

            {reservations.map((e)=>
            
            <tr key={e.id+"-tr"} ><td align='center' key={e.id+"-1"}>{e.name}</td><td align='center' key={e.id+"-3"}>{moment(e.date).format('ll')}</td><td align='center' key={e.id+"-2"}>{e.nbPerson}</td></tr>)}
        </tbody>
      </table>
    </div>
    <NavBar></NavBar></>;
}

export default ReservationView;