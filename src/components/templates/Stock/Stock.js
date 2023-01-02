
import * as React from 'react';
import "./stock.css";
import { getData } from '../../../services/getData';
import NavBar from '../../molecules/NavBar/NavBar';



function Stock (){ 
  const [stock, setStock] = React.useState([]);

 React.useEffect(() => {
      const getD = async () => {
        const response = await getData("Product");

        setStock([...response.data]);
  };
    getD();
  },[stock]);

    return <>

    <div id='container' className="wrapper">
      <h1>inventaire</h1>
      <table>
        <tbody>
            <tr>
                <th>Nom du produit</th>
                <th>QTE</th>
                <th>QTEN</th>
            </tr>
            <tr className="espace">
              <td></td>
            </tr>

            {stock.map((e)=>
            
            <tr key={e.id+"-tr"} ><td align='center' key={e.id+"-1"}>{e.name}</td><td align='center' key={e.id+"-3"}>{e.quantity}</td><td align='center' key={e.id+"-2"}>{e.requiredQty}</td></tr>)}
        </tbody>
      </table>
    </div>
    <NavBar></NavBar></>;
}

export default Stock;