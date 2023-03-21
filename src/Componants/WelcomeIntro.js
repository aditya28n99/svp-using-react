import './WelcomeIntro.css'

function WelcomeIntro(props){

    const addFadeEffect = () =>{     
        let fades = document.querySelector('.fade-effect');
        fades.classList.add("fade-In");
    }

    return(
        <section className="sections" id="welcome-section" onLoad={addFadeEffect}>
        <div id="welcome-heading">
            <h1 className="element-white fade-effect">{props.welcomeHeading}</h1>
            <h6 className="fade-effect">{props.welcomeHeading2}
            </h6>
        </div>
        </section>
    );
}
export default WelcomeIntro;