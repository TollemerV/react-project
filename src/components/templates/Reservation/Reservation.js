
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
    const [numTable, setnumTable] = React.useState(1);


/*     function compare(d1, d2) {
        const dd1 = d1.getFullYear()+ "" + d1.getMonth()+ "" +d1.getDate();
        const dd2 = d2.getFullYear()+ "" + d2.getMonth()+ "" +d2.getDate();
        const res = dd1 == dd2 ? 0 : ( dd1 > dd2 ? 1 : -1 );
        return res;
    } */

    const send = async function (){
        
        let msg;
        if (dateValue < (new Date())){
            msg = "Erreur : la date et l'heure doit etre suppérieur à la date et l'heure de maintenant";
        }else {
            let result = await fetchData("reservation", numTable, dateValue, nameValue);
            console.log(result);
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

    const handleNumTable = (event) => {
        setnumTable(event.target.value);
    };
    
    return <><Stack spacing={10} direction="column" alignItems="center" justifyContent="space-around">
                <h1>Reservation :</h1>
                    <div id="container-formcontrol">

                    <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <TextField onChange={handleName} id="outlined-basic" label="Nom de la réservation" variant="outlined" />
                            </FormControl>
                        </Box>
                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <InputLabel id="numTable-label">Numéro de Table</InputLabel>
                                <Select labelId="numTable-label" id="numTable-select" value={numTable} label="Numéro de Table" onChange={handleNumTable}>
                                    <MenuItem value={1}>table 1</MenuItem>
                                    <MenuItem value={2}>table 2</MenuItem>
                                    <MenuItem value={3}>table 3</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        
                        <Box>   
                            <FormControl>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Stack spacing={3}>

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

                
                <NavBar></NavBar></>;
}

export default Reservation;