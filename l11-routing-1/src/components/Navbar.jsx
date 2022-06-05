import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
   
  const navigate =useNavigate();
  const handleClick = (id) => {
      if(id===1)
       navigate('/products/1')
  }
  return (
    <div style={{width:"100%",margin:"auto",gap:'20px',height:"50px",display:"flex",justifyContent:"space-around"}}>Navbar
       <div><Link to="">Home</Link></div>
        <div><Link to="/about">About</Link></div>
        <div><Link to="/products">Products</Link></div>
        <div><button onClick={() => handleClick(1)}>Go to product 1</button></div>
    </div>
  )
}

export default Navbar