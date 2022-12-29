import { Link } from "react-router-dom";
import "./cardcui.css";
function CardCui (props) {
return <Link to={props.to} ><div className="wrapper1">
            <div className="wrapper2">
                <img className="image" src={props.img} alt={props.imgAlt} id={props.imgId}/>
                <span className="text">{props.text}</span>
                
            </div>
        </div></Link>;
}
export default CardCui;