
import './App.css';
import Header from './Componants/Header';
import Footer from './Componants/Footer';
import TopScrollBtn from './Componants/TopScrollBtn';
// import Navbar from './Componants/Navbar';
import { Routes ,Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import School from './Pages/School/School';
import JrCollege from './Pages/JrCollege/JrCollege';
import Gallery from './Pages/Gallery/Gallery';

function App() {
  const animateData =() => {

    const observer = new IntersectionObserver((all_entries) => {

        all_entries.forEach((each_entry) => {

            if (each_entry.intersectionRatio > 0) {
                each_entry.target.classList.add("show");
            }
        })
    });
    const animate = document.querySelectorAll(".animate")
    animate.forEach((el) => observer.observe(el));
}
  return (
    <>
    <section onMouseOver={animateData}>
    <Header/>
    <Routes>
     <Route path='/' Component={Home}/>
     <Route path='/school' Component={School}/>
     <Route path='/jrcollege' Component={JrCollege}/>
     <Route path='/gallery' Component={Gallery}/>
    </Routes>
    <Footer/>
    <TopScrollBtn/>
    </section>
    </>
  );
}

export default App;
