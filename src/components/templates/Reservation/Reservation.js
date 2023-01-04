
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "react-datepicker/dist/react-datepicker.css";
import "./reservation.css";
import { fetchData } from '../../../services/fetchData';
import NavBar from '../../molecules/NavBar/NavBar';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';


function Reservation (){

    const [dateValue, setDayJsValue] = React.useState(dayjs(new Date()));
    const [nameValue, setNameValue] = React.useState("");
    const [nbPersonValue, setNbPerson] = React.useState(1);

    const send = async function (){
        
        let msg;
        if (dateValue < (new Date())){
            msg = "Erreur : la date et l'heure doit etre suppérieur à la date et l'heure de maintenant";
        }else {
            await fetchData("reservation", nbPersonValue, dateValue, nameValue);

            msg = "L'envoi est réussit !";      
        }
          alert(msg);
     }

    const handleDate = (newValue) => {
        setDayJsValue(newValue);
    };

    const handleName = (newValue) => {
        setNameValue(newValue.target.value);
    };

    const handleNbPerson = (event) => {
        setNbPerson(event.target.value);
    };
    
    return <>
    
<Stack spacing={10} direction="column" alignItems="center" justifyContent="space-around">
    <h1>Réserver une table</h1>
        <div id="container-formcontrol">

            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <TextField onChange={handleName} id="outlined-basic" label="Nom de la réservation" variant="outlined" />
                </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="numTable-label">Nombre de personnes</InputLabel>
                    <Select labelId="numTable-label" id="numTable-select" value={nbPersonValue} label="Nombre de personnes" onChange={handleNbPerson}>
                        <MenuItem value={1}>1 personne</MenuItem>
                        <MenuItem value={2}>2 personnes</MenuItem>
                        <MenuItem value={3}>3 personnes</MenuItem>
                        <MenuItem value={4}>4 personnes</MenuItem>
                        <MenuItem value={5}>5 personnes</MenuItem>
                        <MenuItem value={6}>6 personnes</MenuItem>
                        <MenuItem value={7}>7 personnes</MenuItem>
                        <MenuItem value={8}>8 personnes</MenuItem>
                    </Select>
                </FormControl>
            </Box>   
            <Box>   
                <FormControl fullWidth>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack spacing={3} >

                            <DateTimePicker
                                label="Date de la réservation"
                                value={dateValue}
                                onChange={handleDate}
                                renderInput={(params) => <TextField {...params} />}
                                />
                        </Stack>
                    </LocalizationProvider>
                </FormControl>
            </Box>

        </div>
        <Button variant="outlined" onClick={()=>send()}>Enregistrer</Button>
</Stack> 
<NavBar active="3" ></NavBar></>;
}

export default Reservation;