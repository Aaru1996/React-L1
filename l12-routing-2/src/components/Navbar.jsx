import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const {isAuth ,logout} = useContext(AuthContext)
    const Navigate =useNavigate();
    const handleClick= () => {
      if(isAuth){
        logout();
     
      }else{
        Navigate('/login')
      }
    }
  return (
    <div style={{backgroundColor:"red",  display:"flex",alignItems:"center",
    justifyContent:"space-around",margin:"auto", width:"100%",height:"50px"}}>Navbar:
        <Link to="">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/feeds">Feeds</Link>
        <button onClick={handleClick}>{isAuth ? 'logout' : 'login'}</button>
    </div>

    
  )
}

export default Navbar