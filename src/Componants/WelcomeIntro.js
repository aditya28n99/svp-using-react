import React from "react";

function WelcomeIntro(){

    const addFadeEffect = () =>{     
        let fades = document.querySelector('.fade-effect');
        fades.classList.add("fade-In");
    }

    return(
        <section className="sections" id="welcome-section" onLoad={addFadeEffect}>
        <div id="welcome-heading">
            <h1 className="element-white fade-effect">Welcome to Vidya Pratishthan, Maharashtra</h1>
            <h6 className="fade-effect">Our Students Grow Up - To Become a Nationalist, Well Cultured and Ideal Citizen.
            </h6>
        </div>
        </section>
    );
}
export default WelcomeIntro;