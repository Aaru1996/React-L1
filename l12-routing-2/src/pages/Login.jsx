import React, { useContext, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'

const Login = () => {
  // const navigate =useNavigate();
  const [userCred, setUserCred] = useState({});
  const {login} =useContext(AuthContext);
   
  const handleChange = ({name,value}) => {

    
      setUserCred({...userCred, [name]:value})
  }

  const handleLogin = (e) => {
         e.preventDefault();
         login(); 
        //  navigate("/feeds");
  }
   
  return (
    <div>Login
      <form
      onSubmit={handleLogin}
      style={{
       margin:"auto",
       width:'200px',
      }}
      >
        <input name="email" type="text" placeholder='enter email' onChange={handleChange}/>
        <input name="password" type="password" placeholder='enter password' onChange={handleChange}/>
        <input type="submit" value="Login"/>

      </form>
    </div>
  )
}

export default Login