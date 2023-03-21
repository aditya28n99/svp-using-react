import './Navbar.css';
import { Link } from "react-router-dom";

function Navbar(props){
    return(
        <nav className="navbar">
            <div className="back-width" id="nav-back">
                <div className="logo">
                    <span>
                        <h3>{props.heading}</h3>
                    </span>
                </div>
                <ul id="nav-list">
                
                <li><Link  to={props.path1}>{props.link1}</Link></li>
                <li><a  href={props.path2}>{props.link2}</a></li>
                <li><a  href={props.path3}>{props.link3}</a></li>
                <li><a  href={props.path4}>{props.link4}</a></li>
                <li><Link  to={props.path5}>{props.link5}</Link></li>
                <li><Link  to={props.path6}>{props.link6}</Link></li>
                <li><Link  to={props.path7}>{props.link7}</Link></li>
                
                </ul>
                <aside id="nav-sidebar">
                    <i id="sidebutton" className="fa fa-bars" aria-hidden="true"></i>
                </aside>
            </div>
        </nav>
    );
}
export default Navbar;