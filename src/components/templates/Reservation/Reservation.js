
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./reservation.css";
import { fetchData } from '../../../services/fetchData';



function Reservation (){
    const [value, setValue] = React.useState(new Date());
    const [numTable, setnumTable] = React.useState(1);
    const [heureReserv, setHeureReserv] = React.useState(12);
    function compare(d1, d2) {
        const dd1 = d1.getFullYear()+ "" + d1.getMonth()+ "" +d1.getDate();
        const dd2 = d2.getFullYear()+ "" + d2.getMonth()+ "" +d2.getDate();
        const res = dd1 == dd2 ? 0 : ( dd1 > dd2 ? 1 : -1 );
        return res;
    }
    const send = async function (){
        let result = await fetchData("reservation", numTable, value, heureReserv);
        let msg;
        if (compare(value,new Date())==-1){
            msg = "Erreur : la date doit etre suppérieur que la date d'aujourd'hui";
        }else {
            msg = "L'envoi est réussit !";
        }
        alert(msg);
    }
    const handleNumTable = (event) => {
        setnumTable(event.target.value);
    };
    
    const handleHeure = (event) => {
        setHeureReserv(event.target.value);
    };
    return <Stack spacing={20} direction="column" alignItems="center" justifyContent="space-around">
                <h1>Reservation :</h1>
                <Stack spacing={20} direction="row" justifyContent="space-evenly"
  alignItems="center">
                     <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="numTable-label">Numéro de Table</InputLabel>
                            <Select
                            labelId="numTable-label"
                            id="numTable-select"
                            value={numTable}
                            label="Numéro de Table"
                            onChange={handleNumTable}
                            >
                            <MenuItem value={1}>table 1</MenuItem>
                            <MenuItem value={2}>table 2</MenuItem>
                            <MenuItem value={3}>table 3</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ minWidth: 120 }}>
                        <FormControl fullWidth>
                            <InputLabel id="heure-reservation-label">Heure :</InputLabel>
                            <Select
                            labelId="heure-reservation-label"
                            id="heure-reservation"
                            value={heureReserv}
                            label="Heure"
                            onChange={handleHeure}
                            >
                            <MenuItem value={10}>11:00</MenuItem>
                            <MenuItem value={12}>12:00</MenuItem>
                            <MenuItem value={13}>13:00</MenuItem>
                            <MenuItem value={14}>14:00</MenuItem>
                            <MenuItem value={18}>18:00</MenuItem>
                            <MenuItem value={19}>19:00</MenuItem>
                            <MenuItem value={20}>20:00</MenuItem>
                            <MenuItem value={21}>21:00</MenuItem>
                            <MenuItem value={22}>22:00</MenuItem>
                            <MenuItem value={23}>23:00</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                    <Box>
                        <InputLabel>Date de réservation :</InputLabel>
                        <DatePicker selected={value} onChange={(d) => setValue(d)} />
                    </Box>
                    
                    
                </Stack>    
                
                <Button variant="outlined" onClick={()=>send()}>Enregistrer</Button>
            </Stack>;
}

export default Reservation;