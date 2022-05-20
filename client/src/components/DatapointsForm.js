import React, {useState} from 'react';
import axios from 'axios';

const DataPointsForm = ({userData, setUserData}) => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    drug: "Group A",
    measureBefore: "1",
    measureAfter: "1",
  })

  //Posts new user to database, updates userData
  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `/api/users/${userData.id}/datapoints`,
      data: formData
    })
    .then(res =>{
      const updatedDatapoints = userData.userDatapoints
      updatedDatapoints.push(res.data)
      setUserData({...userData, userDatapoints: updatedDatapoints})
      setFormData({
        ...formData,
        name: "",
        age: "",
        drug: "Group A",
        measureBefore: 1,
        measureAfter: 1,
      })
    })
    .catch(err => alert(`Something has gone wrong refresh and try again - ${err.response.status}`))
  }

  return (
    <form onSubmit= {handleSubmit}>
      <div>
        <label>Name </label>
        <input 
          type="text" 
          name="name" 
          required
          value={formData.name}
          onChange={e => setFormData({...formData, name: e.target.value})}
        />
      </div>
      <div>
      <label>Age </label>
        <input 
          type="number" 
          name="age" 
          required
          value={formData.age}
          onChange={e => setFormData({...formData, age: e.target.value})}
        />
      </div>
      
      <div>
        <label>Trial A/B</label>
        <select 
            value={formData.drug}        
            name="drug" 
            required
            onChange={e => setFormData({...formData, drug: e.target.value})}
        >
          <option value="Group A">Group A</option>
          <option value="Group B">Group B</option>
        </select>
      </div>
      
      <div>
        <label>Rating Before</label>
        <select
          name="measureBefore" 
          required
          value={formData.measureBefore}
          onChange={e => setFormData({...formData, measureBefore: e.target.value})}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
        </select>
      </div>
      
      <div>
      <label>Rating After</label>
      <select
        name="measureAfter" 
        required
        value={formData.measureAfter}
        onChange={e => setFormData({...formData, measureAfter: e.target.value})}
      >
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
        <option value={6}>6</option>
        <option value={7}>7</option>
        <option value={8}>8</option>
        <option value={9}>9</option>
        <option value={10}>10</option>
      </select>
      </div>
 
      <button type="submit">Add Entry</button>
    </form>
  );
}
 
export default DataPointsForm;