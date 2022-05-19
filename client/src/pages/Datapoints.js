import React, { useContext} from 'react';
import DatapointsForm from '../components/DatapointsForm';
import UserContext from '../UserContext'
import axios from 'axios';
import { Link } from 'react-router-dom';


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
    return(<div key={_id} >
      <div>{name}</div>
      <div>{age}</div>
      <div>{drug}</div>
      <div>{measureBefore}</div>
      <div>{measureAfter}</div>
      <button onClick={(e) => deleteDatapoint(_id)}>X</button>
    </div>)
  })

  return (
    <>
    <Link to={analysisUrl}>
      Analysis
    </Link>
    <DatapointsForm userData={userData} setUserData={setUserData}/>
    {DatapointList}
    </>
  );
}
 
export default Datapoints;