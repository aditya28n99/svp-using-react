
import './App.css';
import Footer from './Componants/Footer';
import Header from './Componants/Header';
import HomeContent from './Componants/HomeContent';
import Navbar from './Componants/Navbar';
import TopScrollBtn from './Componants/TopScrollBtn';
import WelcomeIntro from './Componants/WelcomeIntro';

function App() {
  return (
    <>  
    <Header/>
    <Navbar Donations="Donations" Home="Home" ContactUs="Contact Us" JrCollege="Jr College" School="School" Gallery="Gallery"/>
    <WelcomeIntro/>
    <HomeContent/>
    <Footer/>
    <TopScrollBtn/>
    </>
  );
}

export default App;
