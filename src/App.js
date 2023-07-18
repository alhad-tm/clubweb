import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
            <Routes>
             
                <Route path='/' element={<Main/>}/>
                
            </Routes>
        </Router>
    </div>
  );
}

export default App;
