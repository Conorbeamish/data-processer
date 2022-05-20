import './App.css';
import jwtDecode from "jwt-decode";
import { BrowserRouter as Router} from "react-router-dom";
import { setTokenHeader } from './utils/apiCall';
import { useEffect, useState } from "react";
import {UserProvider} from './UserContext';
import {  Routes, Route,} from "react-router-dom";
import Analysis from './pages/Analysis';
import Login from "./pages/Login"
import Header from './components/Header';
import Datapoints from './pages/Datapoints';
import Main from "./pages/Main";
import axios from 'axios';
import RequireAuth from './components/RequireAuth';


function App() {

  const [userData, setUserData] = useState();
  //Rehydrate user on page load 
  useEffect(() => {
    if(localStorage.jwtToken){
      setTokenHeader(localStorage.jwtToken);
      const fetchData = () => {
        const userInfo = jwtDecode(localStorage.jwtToken)
        axios({
          method: "get",
          url: `/api/users/${userInfo.id}/datapoints`,
        }).then(res =>{
          const userDatapoints = res.data
          setUserData({...userInfo, userDatapoints })
        })
        .catch(err => console.log(err))
      }
      fetchData();
    }
  }, [ ])
  
  return (
    <UserProvider value={{userData, setUserData}}>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<Login loginType={"signin"} />} />
          <Route path="/signup" element={<Login loginType={"signup"} />} />
          
            <Route path="/user/:id/datapoints" element={
              <RequireAuth userData={userData}>
                <Datapoints/>
              </RequireAuth>
            } />
            <Route path="/user/:id/analysis" element={
              <RequireAuth userData={userData}>
              <Analysis/>
            </RequireAuth>
            } />
        
        </Routes>
      </Router>
    </UserProvider>
    
  );
}

export default App;
