import React, {useState} from 'react';
import axios from 'axios';


const AuthForm = ({loginType}) => {
  const [userData, setUserData] = useState({
    username: "",
    password: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `http://localhost:5000/api/auth/${loginType}`,
      data: userData
    })
    .then(res => localStorage.setItem("jwtToken", res.data.token))
    .catch(err => console.log(err))
  }
  

  return (  
    <form onSubmit= {handleSubmit}>
      <label>Username </label>
      <input 
        type="text" 
        name="username" 
        required
        onChange={e => setUserData({...userData, username: e.target.value})}
      />

      <label>Password </label>
         <input 
          type="password" 
          name="password" 
          required 
          onChange={e => setUserData({...userData, password: e.target.value})}
        />
        <button type="submit">
          {loginType}
        </button>

    </form>
  );
}
 
export default AuthForm;

