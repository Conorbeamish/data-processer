import UserContext from '../UserContext'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { logout } from '../utils/auth';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components'

const HeaderStyles = styled.div`
  padding: 2rem 2rem;
  display: flex;
  justify-content: space-between ;
  h3{
    padding: 0;
    margin: 0;
  }
  a{
    margin: 0 1rem ;
  }
  #logo{
    background-color: #eaeaee;
    color: black;
    padding: 0;
    margin: 0;
    box-shadow: none ;
  }
`

const Header = () => {
  const {userData, setUserData} = useContext(UserContext);
  const navigate = useNavigate();
  return (  
    <HeaderStyles>
      <Link to={"/"}  id={"logo"}>  
        <h3>Pharma Visualizer</h3>
      </Link> 
      {userData?.username ? 
        <div>
          <Link to={"/"} onClick={()=> {
            logout(setUserData);
            navigate("/");
          }}>
            Logout {userData?.username}
          </Link>
        </div>
      :
        <div>
          <Link to={"/signup"}>Sign up </Link>
          <Link to={"/signin"}>Sign In </Link>
        </div>
      }

    </HeaderStyles>
  );
}
 
export default Header;