import React, {createContext} from "react";
import useAuthenticate from "../hooks/Authenticate";
export const UserContext =  createContext();

export function UserProvider({ children }){
    const {Login, authenticated, logOut, setAuthenticated, StoreUser, DeleteUser} = useAuthenticate();
    return(
        <UserContext.Provider value={{Login, authenticated, logOut, setAuthenticated, StoreUser, DeleteUser}}>
            {children}
        </UserContext.Provider>
    )
}