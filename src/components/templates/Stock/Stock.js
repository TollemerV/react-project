
import * as React from 'react';
import "./stock.css";
import { getData } from '../../../services/getData';
import NavBar from '../../molecules/NavBar/NavBar';
import stylo from '../../../assets/stylo.png';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { fetchDataStock } from '../../../services/fetchDataStock';

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



function Stock (){ 
  const [stock, setStock] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState(0);
  const [nameValue, setNameValue] = React.useState("");
  const [requiredQty, setRequiredQty] = React.useState(0);
  const [quantity, setQuantity] = React.useState(0);
  const handleClose = () => setOpen(false);
  const handleName = (newValue) => {
    setNameValue(newValue.target.value);
  };
  const handleRequiredQty = (newValue) => {
    setRequiredQty(newValue.target.value);
  };
  const handleQuantity = (newValue) => {
    setQuantity(newValue.target.value);
  };

  function modif(id_tmp, name, reqQty, qty){
    setOpen(true);
    setId(id_tmp); 
    setNameValue(name);
    setRequiredQty(reqQty);
    setQuantity(qty);
  }
  const getD = async () => {
    const response = await getData("product");
    setStock([...response.data]);
  };
 React.useEffect(() => {
      
    getD();
  },[]);
  const send = async function (){  
    await fetchDataStock(id, nameValue, requiredQty, quantity);
    alert("L'envoi est réussit !");
    handleClose();
    getD();
  }
    return <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modif-modal-title"
        aria-describedby="modif-modal-description"
      >
        <Box sx={style}>
          <TextField className="marginbuttom" onChange={handleName} id="product-name" label="Nom produit" variant="outlined" value={nameValue} />
          <br/>
          <TextField className="marginbuttom" onChange={handleQuantity} id="product-qty" label="Quantité" variant="outlined" value={quantity}/>
          <br/>
          <TextField className="marginbuttom" onChange={handleRequiredQty} id="product-req-qty" label="Quantité requise" variant="outlined" value={requiredQty}/>
          <br/>
          <Button className="MuiButton-root-100" allign="center" variant="outlined" onClick={()=>send()}>Enregistrer</Button>
        </Box>
      </Modal>
    <div id='container' className="wrapper">
      <h1>inventaire</h1>
      <table>
        <tbody>
            <tr>
                <th>Nom du produit</th>
                <th>QTE</th>
                <th>QTEN</th>
                <th>Modification</th>
            </tr>
            <tr className="espace">
              <td></td>
            </tr>

            {stock.map((e)=> 
            <tr key={e.id+"-tr"} >
              <td align='center' key={e.id+"-1"}>{e.name}</td>
              <td align='center' key={e.id+"-3"}>{e.quantity}</td>
              <td align='center' key={e.id+"-2"}>{e.requiredQty}</td>
              <td align='center' key={e.id+"-4"}><button onClick={()=>{modif(e.id, e.name, e.requiredQty, e.quantity);}}><img className="modif-img" src={stylo} alt="modifier"/></button></td></tr>
    
            )}
        </tbody>
      </table>
    </div>
    <NavBar active="2" ></NavBar></>;
}

export default Stock;