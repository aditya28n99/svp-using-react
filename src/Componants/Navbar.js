import React from "react";

function Navbar(props){
    return(
        <nav className="navbar">
            <div className="back-width" id="nav-back">
                <div className="logo">
                    <span>
                        <h3>Vidya Pratishthan, Maharashtra</h3>
                    </span>
                </div>
                <ul id="nav-list">
                    <li><a className="point" href="/">{props.Home}</a></li>
                    <li><a href="/">{props.Donations}</a></li>
                    <li><a href="/">{props.ContactUs}</a></li>
                    <li><a href="/">{props.School}</a></li>
                    <li><a href="/">{props.JrCollege}</a></li>
                    <li><a href="/">{props.Gallery}</a></li>
                </ul>
                <aside id="nav-sidebar">
                    <i id="sidebutton" className="fa fa-bars" aria-hidden="true"></i>
                </aside>
            </div>
        </nav>
    );
}
export default Navbar;