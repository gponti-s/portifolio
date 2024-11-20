import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const appTitle = process.env.REACT_APP_TITLE;
    const appSubTitle = process.env.REACT_APP_SUBTITLE;

    return(
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, appTitle, appSubTitle,}}>
            { children }
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);