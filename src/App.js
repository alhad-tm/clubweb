import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Invite from './Components/Invite/Invite';
import Eventlist from './Components/Eventlist/Eventlist';
import Banner from './Components/Banner/Banner';
import Benefits from './Components/Benefits/Benefits';
import Services from './Components/Services/Services';
import Footer from './Components/Footer/Footer';
import Advantage from './Components/Advantage/Advantage';
import Subscribe from './Components/Subscribe/Subscribe';
import AreaOfInterest from './Components/AreaOfInterest/AreaOfInterest';
import  Backto from "../src/assets/newbt2.svg"
import { useState } from 'react';
// import SimpleSlider from './Components/Slick/Slick';

// import PageNotFound from './Components/PageNotFound/PageNotFound';

function App() {
  const [state,setState]=useState(false)
  const backTo=()=>{
    if(window.scrollY>100){
      setState(true)
    } else{
      setState(false)
    }
  }
  window.addEventListener('scroll',backTo)
  return (
    <div className="App">
      <Router>
      <Header/>
      <Banner/>
      <Benefits/>
      {/* <Services/> */}
      <AreaOfInterest/>
      {/* <SimpleSlider/> */}
      
      <Advantage/>
      <Subscribe/>
      <Footer/>
      <img onClick={() => window.scrollTo(0, 0)} className= {state? "ins2": "ins"} src={Backto}></img>
      {/* <Main/> */}
      {/* <Invite/>
      <Eventlist/> */}
            <Routes>
            {/* <Route path="*"  element={<PageNotFound/>} />  */}
                {/* <Route path='/' element={<Main/>}/> */}
              
                
            </Routes>
        </Router>
    </div>
  );
}

export default App;
