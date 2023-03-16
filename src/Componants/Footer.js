import React from "react";

function Footer(){
    return(
        <div className="background-pink">
        <div className="back-width background-white" id="tearms-privacy">
            
            <div id="blank2"><a href="/">Terms of service</a></div>
            <div id="blank3"><a href="/">
                    Privacy policy</a></div>
        </div>

        <footer className="back-width background-pink" id="foot">
            <div className="l-sec">
                <p className="para">All Rights Reserved</p>
                <p className="para">Replicated by <a href="/">Aditya Wakale</a></p>
            </div>
            <div className="r-sec">
                <a href="/"><i className="fa fa-facebook-official" aria-hidden="true"></i></a>
                <a href="/"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
            </div>
        </footer>
        </div>
    );
}
export default Footer;