import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const RequiredAuth = ({children}) => {
    const {isAuth} =useContext(AuthContext);
    const location =useLocation();
    // console.log(location)
    if(isAuth){
        return (
          <div>{children}</div> 
        )
       }else{
      
       return  <Navigate to="/login" state={{from:location.pathname}} replace/>
        //  navigate('/login')
       }
}

export default RequiredAuth