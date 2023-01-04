
import * as React from 'react';
import "./reservationView.css";
import { getData } from '../../../services/getData';
import NavBar from '../../molecules/NavBar/NavBar';
import moment from 'moment';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { deleteReservation } from '../../../services/deleteReservation';
import poubelle from '../../../assets/poubelle.png';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function ReservationView (){

  moment.locale('fr');  
  const [reservations, setReservations] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState(0);
  const handleClose = () => setOpen(false);
  const getD = async () => {
    const response = await getData("reservation");
    setReservations([...response.data]);
  };
  function supprimer(id_tmp){
    setOpen(true);
    setId(id_tmp); 
  }
 React.useEffect(() => {
      
    getD();
  },[]);
  const send = async function (){  
    await deleteReservation(id);
    alert("L'envoi est réussit !");
    handleClose();
    getD();
  }
    return <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="suppr-modal-title"
        aria-describedby="suppr-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Confirmez-vous votre choix ?
          </Typography>
          <Button className="MuiButton-root-47" variant="link" onClick={()=>send()}>OUI</Button>
          <Button className="MuiButton-root-47" variant="outlined" onClick={handleClose}>NON</Button>
        </Box>
      </Modal>
    <div className="wrapper container">
      <h1>Réservation du jour</h1>
      <table>
        <tbody>
            <tr>
                <th>Nom</th>
                <th>Date</th>
                <th>Nombre de personne(s)</th>
                <th>Supprimer</th>
            </tr>
            <tr className="espace">
              <td></td>
            </tr>

            {reservations.map((e)=>
            
            <tr key={e.id+"-tr"} ><td align='center' key={e.id+"-1"}>{e.name}</td><td align='center' key={e.id+"-3"}>{moment(e.date).format('ll')}</td><td align='center' key={e.id+"-2"}>{e.nbPerson}</td><td align='center' key={e.id+"-3"}><button onClick={()=>supprimer(e.id)}><img className="suppr-img" src={poubelle} alt="supprimer"/></button></td></tr>)}
        </tbody>
      </table>
    </div>
    <NavBar active="1" ></NavBar></>;
}

export default ReservationView;