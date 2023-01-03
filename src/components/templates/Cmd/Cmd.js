
import * as React from 'react';
import "./cmd.css";
import { getData } from '../../../services/getData';
import NavBar from '../../molecules/NavBar/NavBar';



function Cmd (){ 
  const [stock, setStock] = React.useState([]);

 React.useEffect(() => {
      const getD = async () => {
        const response = await getData("product");

        setStock([...response.data]);
  };
    getD();
  },[]);

    return <>

    <div id='container' className="wrapper">
      <h1>Commandes à effectuer</h1>
      <table>
        <tbody>
            <tr>
                <th>Nom du produit</th>
                <th>QTE</th>
            </tr>
            <tr className="espace">
              <td></td>
            </tr>

            {stock.map(function (e){
            if (e.requiredQty > e.quantity){
                return <tr key={e.id+"-tr"} ><td align='center' key={e.id+"-1"}>{e.name}</td><td align='center' key={e.id+"-2"}>{e.requiredQty - e.quantity}</td></tr>;
            }else {
              return <></>;
            }
            }
            )}
        </tbody>
      </table>
    </div>
    <NavBar></NavBar></>;
}

export default Cmd;