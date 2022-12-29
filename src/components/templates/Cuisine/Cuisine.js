import "./cuisine.css";
import NavBar from "../../molecules/NavBar/NavBar";
import * as React from 'react';
import clock from '../../../assets/clock.png';
import CardCui from "../../atoms/CardCui/CardCui";

export default function Cuisine () {
  
    return (<><div id="container-cuisine"><span id="cuisine-title">Cuisine</span><div id="container"><CardCui id1="wrapper1-inventaire" 
                     id2="wrapper2-inventaire"
                     img={clock} 
                     imgId="img1-inventaire" 
                     imgAlt="inventaire" 
                     text="Inventaire" 
                     to="/inventaire">

              </CardCui>
              <CardCui id1="wrapper1-cmds" 
                     id2="wrapper2-cmds"
                     img={clock} 
                     imgId="img1-cmds" 
                     imgAlt="commandes à effectuer" 
                     text="Commandes à effectuer" 
                     to="/cmd">

              </CardCui>
              <CardCui id1="wrapper1-histo-cmds" 
                     id2="wrapper2-histo-cmds"
                     img={clock} 
                     imgId="img1-histo-cmds" 
                     imgAlt="historique de commandes" 
                     text="Historique de commandes" 
                     to="/histo-cmd">

              </CardCui>
              <CardCui id1="wrapper1-menu" 
                     id2="wrapper2-menu"
                     img={clock} 
                     imgId="img1-menu" 
                     imgAlt="menu" 
                     text="Menu"  
                     to="/menu">

              </CardCui>
            </div>
            
            </div>
            <NavBar></NavBar>
            </>);
}