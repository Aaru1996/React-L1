import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext, AuthProvider } from '../context/AuthContext'

const Feeds = () => {
  return (
    <div>Feeds</div> 
  )

//   const {isAuth} =useContext(AuthContext);
//   const navigate=useNavigate();

//  if(isAuth){
//   return (
//     <div>Feeds</div> 
//   )
//  }else{

//  return  <Navigate to="/login"/>
//   //  navigate('/login')
//  }
 
}

export default Feeds