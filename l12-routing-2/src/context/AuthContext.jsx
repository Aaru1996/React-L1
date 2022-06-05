import React, { createContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export const AuthContext= createContext();
export const AuthProvider= ({children}) => {
     
    const [isAuth, setIsAuth]=useState(false);
     const navigate=useNavigate();
     const {state} =useLocation();
     console.log(state)

    const login = () => {
        setIsAuth(true);

        if(state.from !==null){
        navigate(state.from ,{replace:true} )
        }
        else if(state.form===null){
            navigate("/");
        }
    }

    const logout = () => {
        setIsAuth(false)
        navigate('/')
    }
    return <AuthContext.Provider value={{isAuth, login, logout}}>{children}</AuthContext.Provider>
}