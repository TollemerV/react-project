import { Link } from "react-router-dom";
import "./cardcuisine.css";
function CardCuisine (props) {
return (<div className="wrapper-cc-1"> 
            <Link to={props.to} >
                <div className="container-cc-1">
                    <img className="image" src={props.img} alt={props.imgAlt} id={props.imgId}/>
                    <span className="text">{props.text}</span>
                    
                </div>
            </Link>
        </div>
        );
}
export default CardCuisine;