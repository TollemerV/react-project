import DateInput from "../../molecules/DateInput/DateInput";
import MySelect from "../../molecules/MySelect/MySelect";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function send(){
    
}

function Reservation (){
    return <Stack spacing={2} direction="column">
                <h1>Reservation :</h1>
                <DateInput></DateInput>
                <MySelect></MySelect>
                <Button variant="outlined" onClick={send}>Reserver !</Button>
            </Stack>;
}

export default Reservation;