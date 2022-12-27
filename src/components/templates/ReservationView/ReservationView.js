
import * as React from 'react';
import "./reservationView.css";
import { getData } from '../../../services/getData';
import NavBar from '../../molecules/NavBar/NavBar';


function ReservationView (){
    
     const [reservations, setReservations] = React.useState([]);
  
  

  const getD = async () => {
    const response = await getData("reservation");

    setReservations([...reservations, ...response.data]);
  };
  React.useEffect(() => {
    getD();
  },[]);
    return <><div className="wrapper" ><table>
            <tbody>
                <tr>
                    <th>Id</th>
                    <th>Numéro de table</th>
                    <th>Heure</th>
                    <th>Date</th>
                </tr>
                {reservations.map((e)=><tr key={e.id+"-tr"} ><td key={e.id+"-1"}>{e.id}</td><td key={e.id+"-2"}>{e.numTable}</td><td key={e.id+"-3"}>{e.heure}</td><td key={e.id+"-4"}>{e.date}</td></tr>)}
            </tbody>
            </table>
            </div>
            <NavBar></NavBar></>;
}

export default ReservationView;