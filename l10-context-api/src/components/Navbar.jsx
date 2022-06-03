import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { CartContext } from '../context/CartContext'
import { ThemeContext } from '../context/ThemeContext'
import Wishlist from './Wishlist'

const Navbar = () => {
  const {Buy}=useContext(CartContext);
  const {isLight,toggleTheme}=useContext(ThemeContext)
  const {isAuthorized, login, logout}=useContext(AuthContext)
  return (
    <div>Navbar
      <button 
      onClick={() => {
        if(isAuthorized){
          logout();
        }else{
          login("R","Z");
        }
      }}
      >{isAuthorized ? "logout" :"login"}
      </button>
      <button onClick={Buy}>Buy</button>
      <button onClick={toggleTheme}>{`make ${isLight ? "dark" :"light"}`}</button>
        <Wishlist/>
    </div>
  )
}

export default Navbar