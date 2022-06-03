import React, {createContext, useState} from "react";

export const AuthContext=createContext();

export const AuthProvider= ({children}) => {

    const [isAuthorized, setAuthorizes]=useState(false);

    const login = (username,password) => {
        if(username && password){
            setAuthorizes(true)
        }
    }

    const logout = () => {
        setAuthorizes(false)
    }
    return <AuthContext.Provider value={{isAuthorized,login,logout}}>{children}</AuthContext.Provider>
}