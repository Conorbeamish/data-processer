import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext'
import styled from 'styled-components'

const MainStyles = styled.div`
  display: flex;
  flex-direction: column ;
  padding: 2rem;
  min-height: 80vh ;
  justify-content:center;
  width: 50% ;
  h1 {
    font-size: 5rem ;
    font-weight:bold ;
  }
  p{
    letter-spacing: 2px ;
  }
  a{
    margin: 2rem 1rem 0 0;
  }
  `

const Main = () => {

  const {userData, setUserData} = useContext(UserContext);
  const dataPointsUrl = userData ? `/user/${userData.id}/datapoints` : ""
  return (
    <MainStyles>
      <h1>
        Pharma Visualizer
      </h1>
      <p>
        This application lets you compare the effects of two pharmaceutical drugs, scoring the a desired criteria before and after use.
      </p>

    <p>
      The data is then analysed and presented in a visualisation to better understand the effectiveness of the medication
    </p>
    <p>
      Get started below
    </p>
      {userData?.username ?
      <div>
        <Link to={dataPointsUrl}>
          Dataset
        </Link> 
      </div>
        
      
        
        : 
        <div>
        <Link to="/signup" >
          Sign Up
        </Link>
        <Link to="/signup">
          Sign In
        </Link>
      </div>
      }
      
    </MainStyles> 
  );
}
 
export default Main;