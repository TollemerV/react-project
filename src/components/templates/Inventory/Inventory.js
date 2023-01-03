
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import "react-datepicker/dist/react-datepicker.css";
import "./inventory.css";
import NavBar from '../../molecules/NavBar/NavBar';
import TextField from '@mui/material/TextField';
import { fetchDataProduct } from '../../../services/fetchDataProduct';


function Inventory (){

    const [qty, setQtyValue] = React.useState(0);
    const [nameValue, setNameValue] = React.useState("");
    const [qtyN, setQtyNValue] = React.useState(0);

    const send = async function (){
        
        let msg;
        if (qtyN < 0 || qty < 0 ){
            msg = "Erreur : la quantité et la quantité nécessaire doivent etre positifs";
        }else {
            await fetchDataProduct(qty, qtyN, nameValue);
            msg = "L'envoi est réussit !";      
        }
          alert(msg);
     }

    const handleName = (newValue) => {
        setNameValue(newValue.target.value);
    };

    const handleQty = (newValue) => {
        setQtyValue(newValue.target.value);
    };

    const handleQtyN = (newValue) => {
        setQtyNValue(newValue.target.value);
    };
    
    return <>
    
<Stack spacing={10} direction="column" alignItems="center" justifyContent="space-around">
    <h1>Création d'inventaire</h1>
        <div id="container-formcontrol">

            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <TextField onChange={handleName} id="outlined-basic" label="Nom du produit" variant="outlined" />
                </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <TextField onChange={handleQty} id="outlined-basic" label="Quantité" variant="outlined" type="number" />
                </FormControl>
            </Box>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <TextField onChange={handleQtyN} id="outlined-basic" label="Quantité nécessaire" variant="outlined" type="number" />
                </FormControl>
            </Box>
            

        </div>
        <Button variant="outlined" onClick={()=>send()}>Enregistrer</Button>
</Stack> 
<NavBar></NavBar></>;
}

export default Inventory;