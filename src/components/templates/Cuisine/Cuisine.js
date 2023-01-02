import "./cuisine.css";
import NavBar from "../../molecules/NavBar/NavBar";
import * as React from 'react';
import clock from '../../../assets/clock.png';
import CardCuisine from "../../atoms/CardCuisine/CardCuisine";

export default function Cuisine () {
  
    return (<>
                     <div id="container-cuisine-1">
                            <span id="cuisine-title">Cuisine</span>
                            <div id="container-cuisine-2">
                                   <CardCuisine
                                          img={clock} 
                                          imgId="img1-inventaire" 
                                          imgAlt="inventaire" 
                                          text="Inventaire" 
                                          to="/inventaire">

                                   </CardCuisine>
                                   <CardCuisine 
                                          img={clock} 
                                          imgId="img1-cmds" 
                                          imgAlt="commandes à effectuer" 
                                          text="Commandes à effectuer" 
                                          to="/cmd">

                                   </CardCuisine>
                                   <CardCuisine 
                                          img={clock} 
                                          imgId="img1-histo-cmds" 
                                          imgAlt="historique de commandes" 
                                          text="Historique de commandes" 
                                          to="/histo-cmd">

                                   </CardCuisine>
                                   <CardCuisine 
                                          img={clock} 
                                          imgId="img1-menu" 
                                          imgAlt="menu" 
                                          text="Menu"  
                                          to="/menu">

                                   </CardCuisine>
                            </div>
            
                     </div>
                     <NavBar></NavBar>
            </>);
}