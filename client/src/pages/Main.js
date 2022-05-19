import React,{useContext} from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../UserContext'

const Main = () => {
  const {userData, setUserData} = useContext(UserContext);
  const dataPointsUrl = userData ? `/user/${userData.id}/datapoints` : ""
  return (
    <>
    {userData ?
       <Link to={dataPointsUrl}>
       Dataset
     </Link> 
    
      
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
      
    </> 
  );
}
 
export default Main;