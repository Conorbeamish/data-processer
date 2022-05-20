import React, { useContext} from 'react';
import DatapointsForm from '../components/DatapointsForm';
import UserContext from '../UserContext'
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const DatapointStyles = styled.div`
  width: 80%;
  margin:0 auto ;
  min-height: 100vh ;
  display: flex ;
  flex-direction: column ;
  a{
    margin: 0 auto ;
    margin-top: 2rem;
    margin-bottom: 2rem ;
  }
  form {
    display: flex ;
    justify-content: space-evenly ;
    button{
      text-decoration:none ;
      padding: 0 1rem ;
      color: black ;
      background-color: #405cf5;
      border-radius: 6px;
      border-width: 0;
      box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
      box-sizing: border-box;
      color: #fff;
      &:hover{
        cursor: pointer;
      }
    }
  }

`
const DataPointsContainerStyled = styled.div`
  display: grid ;
  grid-template-rows: 1fr ;
  gap: 0.5rem;
  background-color: white;
  margin-top: 2rem ;
  padding: 0.5rem ;
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
  border-radius: 6px ;
`
const ListItemStyled = styled.div`
  display: grid ;
  grid-template-columns: 3fr 1fr 1fr 1fr 1fr auto ;

  button{
    color: white;
    background-color: red;
    border-radius: 6px ;
    border: none ;
    &:hover{
      cursor: pointer;
    }
  }
`

const Datapoints = () => {

  const {userData, setUserData} = useContext(UserContext);
  const analysisUrl = `/user/${userData.id}/analysis`
  const deleteDatapoint = (_id) => {
    axios({
      method: "delete",
      url: `http://localhost:5000/api/users/${userData.id}/datapoints/${_id}`,
    
    })
    .then((res) => {
      const updatedDatapoints = userData.userDatapoints.filter(datapoint => datapoint._id !== _id)
      setUserData({...userData, userDatapoints: updatedDatapoints})
    })
    
    .catch(err => console.log(err))
  }

  const DatapointList = userData?.userDatapoints.map(datapoint =>{
    const {_id, name,age,drug, measureBefore, measureAfter} = datapoint
    return(<ListItemStyled key={_id} >
      <div>{name}</div>
      <div>{age}</div>
      <div>{drug}</div>
      <div>{measureBefore}</div>
      <div>{measureAfter}</div>
      <button onClick={(e) => deleteDatapoint(_id)}>X</button>
    </ListItemStyled>)
  })

  return (
    <DatapointStyles>
    <Link to={analysisUrl}>
      Analysis
    </Link>
    <DatapointsForm userData={userData} setUserData={setUserData}/>
      <DataPointsContainerStyled>
        {DatapointList}
      </DataPointsContainerStyled>
    </DatapointStyles>
  );
}
 
export default Datapoints;