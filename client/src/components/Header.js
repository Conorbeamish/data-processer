import UserContext from '../UserContext'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { logout } from '../utils/auth';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const {userData, setUserData} = useContext(UserContext);
  const navigate = useNavigate();
  return (  
    <>
      {userData?.username ? 
        <div>
          <div>
            {userData?.username}
          </div> 
          <Link to={"/"} onClick={()=> {
            logout(setUserData);
            navigate("/");
          }}>
            Logout
          </Link>
        </div>
      :
        <div>
          <Link to={"/signup"}>Sign up </Link>
          <Link to={"/signin"}>Sign In </Link>
        </div>
      }

    </>
  );
}
 
export default Header;