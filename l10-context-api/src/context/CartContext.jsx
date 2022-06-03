import React, { createContext,useState} from 'react';
import {useContext} from "react" 
import { AuthContext } from './AuthContext';

export const CartContext=createContext();

export const CartProvider = ({children}) => {

const {isAuthorized}=useContext(AuthContext)
  const [count, setCount]= useState(0);

  const addToCart=()=>{
    setCount(count+1);
  }

  const Buy = ()=> {
       if(isAuthorized){
         console.log("You can buy now")
       }
       else{
         console.log("first log in")
       }
  }

  return <CartContext.Provider value={{count,addToCart,Buy}}>{children}</CartContext.Provider>
}
