import "./cuisine.css";
import NavBar from "../../molecules/NavBar/NavBar";
import * as React from 'react';
import inventory from '../../../assets/inventaire.png';
import command from '../../../assets/commande.png';
import menu from '../../../assets/menu.png';
import CardCuisine from "../../atoms/CardCuisine/CardCuisine";
import ajoutInventaire from '../../../assets/inventaire_1.png';
export default function Cuisine () {
  
    return (<>

<div id="container-cuisine-1" className="container">

       <h1 id="cuisine-title">Cuisine</h1>
       <div id="container-cuisine-2">
              <div className="row">
                     <CardCuisine
                            img={inventory} 
                            imgId="img1-inventaire" 
                            imgAlt="inventaire" 
                            text="Inventaire" 
                            to="/inventaire">

                     </CardCuisine>
                     <CardCuisine 
                            img={command} 
                            imgId="img1-cmds" 
                            imgAlt="commandes à effectuer" 
                            text="Commandes à effectuer" 
                            to="/cmd">

                     </CardCuisine>
              </div>
              <div className="row">
                     <CardCuisine 
                            img={ajoutInventaire} 
                            imgId="img1-ajout-inventaire" 
                            imgAlt="Ajouter un inventaire" 
                            text="Ajouter un inventaire" 
                            to="/gestion-de-stock">

                     </CardCuisine>
                     <CardCuisine 
                            img={menu} 
                            imgId="img1-menu" 
                            imgAlt="menu" 
                            text="Menu"  
                            to="/menu">

                     </CardCuisine>
              </div>

       </div>

</div>
<NavBar></NavBar>
            </>);
}