import './App.css';
import { BrowserRouter as Router} from "react-router-dom";
import jwtDecode from "jwt-decode";
import { setTokenHeader } from './utils/apiCall';
import { useEffect, useState } from "react";
import Header from './components/Header';
import {  Routes, Route,} from "react-router-dom";
import Analysis from './pages/Analysis';
import Login from "./pages/Login"
import Datapoints from './pages/Datapoints';
import Main from "./pages/Main";

function App() {

  
  const [userData, setUserData] = useState()

  //Rehydrate user on page load 
  useEffect(() => {
    if(localStorage.jwtToken){
      setTokenHeader(localStorage.jwtToken);
      setUserData(jwtDecode(localStorage.jwtToken))
    }
  }, [ ])
  
  return (
    <Router>
        <Header/>

        <Routes>
        <Route path="/" element={<Main />} />
        <Route path="signin" element={<Login loginType={"signin"} />} />
        <Route path="signup" element={<Login loginType={"signup"} />} />
        <Route path="/user/:id/datapoints" element={<Datapoints/>} />
        <Route path="/user/:id/analysis" element={<Analysis/>} />
      </Routes>
    </Router>
  );
}

export default App;
