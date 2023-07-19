import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Invite from './Components/Invite/Invite';
import Eventlist from './Components/Eventlist/Eventlist';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Main/>
      <Invite/>
      <Eventlist/>
            <Routes>
             
                {/* <Route path='/' element={<Main/>}/> */}
              
                
            </Routes>
        </Router>
    </div>
  );
}

export default App;
