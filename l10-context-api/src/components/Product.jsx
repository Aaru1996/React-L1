import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Cart from './Cart'

const Product = () => {
  const {isAuthorized}= useContext(AuthContext)
  return (
    <div>Product
      <div style={{color:"red"}}> {isAuthorized ? "LoggedIn":'loggedOut'}</div>
   
        <Cart/>
    </div>
  )
}

export default Product