
import * as React from 'react';
import "./menu.css";
import { getData } from '../../../services/getData';
import NavBar from '../../molecules/NavBar/NavBar';
import stylo from '../../../assets/stylo.png';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { fetchDataDish } from '../../../services/fetchDataDish';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




function Menu (){ 
  const [appetizer, setAppetizer] = React.useState([]);
  const [dish, setDish] = React.useState([]);
  const [dessert, setDessert] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState(0);
  const [nameValue, setNameValue] = React.useState("");
  const [collection, setCollection] = React.useState("");
  const [priceValue, setPriceValue] = React.useState("");
  const handleClose = () => setOpen(false);
  const handleName = (newValue) => {
    setNameValue(newValue.target.value);
  };
  const handlePrice = (newValue) => {
    setPriceValue(newValue.target.value);
  };

  function modif(id, collection, name, price){
    setOpen(true);
    setId(id); 
    setCollection(collection);
    setNameValue(name);
    setPriceValue(price);
  }
  const getD = async () => {
      const response_a = await getData("appetizer");
      setAppetizer([...response_a.data]);
      const response_di = await getData("dish");
      setDish([...response_di.data]);
      const response_de = await getData("dessert");
      setDessert([...response_de.data]);    
    };
  React.useEffect(() => {
    
    getD();
  },[]);
  const send = async function (){  
    await fetchDataDish(id, nameValue, priceValue, collection);
    alert("L'envoi est réussit !");
    handleClose();
    getD();
  }
  return <>
    <div id='container' className="wrapper">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modif-modal-title"
        aria-describedby="modif-modal-description"
      >
        <Box sx={style}>
          <TextField className="marginbuttom" onChange={handleName} id="dish-name" label="Nom" variant="outlined" value={nameValue} />
          <TextField className="marginbuttom" onChange={handlePrice} id="dish-price" label="prix" variant="outlined" value={priceValue}/>
          <Button className="MuiButton-root-100" variant="outlined" onClick={()=>send()}>Enregistrer</Button>
        </Box>
      </Modal>
      <h1>Menu</h1>
      <table>
        <tbody>
            <tr>
                <td align='center' className='dish-title'>Entrée</td>
                <td align='center'>Prix</td>
                <td align='center'>Modifier</td>
            </tr>
            

            {appetizer.map((e)=>
                        
            <tr key={e.id+"-tr"} ><td align='center' key={e.id+"-1"}>{e.name}</td><td align='center' key={e.id+"-3"}>{e.price}</td><td align='center' key={e.id+"-2"}><button onClick={()=>{modif(e.id, "appetizer", e.name,e.price);}}><img className="modif-img" src={stylo} alt="modifier"/></button></td></tr>)}
            <tr className="espace">
              <td></td>
            </tr>
            <tr>
                <td align='center' className='dish-title'>Plats</td>
                <td align='center'>Prix</td>
                <td align='center' >Modifier</td>
            </tr>
            

            {dish.map((e)=>
            
            <tr key={e.id+"-tr"} ><td align='center' key={e.id+"-1"}>{e.name}</td><td align='center' key={e.id+"-3"}>{e.price}</td><td align='center' key={e.id+"-2"}><button onClick={()=>{modif(e.id, "dish", e.name,e.price);}}><img className="modif-img" src={stylo} alt="modifier"/></button></td></tr>)}
            <tr className="espace">
              <td></td>
            </tr>
            <tr>
                <td align='center' className='dish-title'>Déssert</td>
                <td align='center'>Prix</td>
                <td align='center'>Modifier</td>
            </tr>
            

            {dessert.map((e)=>
                        
            <tr key={e.id+"-tr"} ><td align='center' key={e.id+"-1"}>{e.name}</td><td align='center' key={e.id+"-3"}>{e.price}</td><td align='center' key={e.id+"-2"}><button onClick={()=>{modif(e.id,"dessert", e.name,e.price);}}><img className="modif-img" src={stylo} alt="modifier"/></button></td></tr>)}
        </tbody>
      </table>
    </div>
    <NavBar active="2" ></NavBar></>;
}

export default Menu;