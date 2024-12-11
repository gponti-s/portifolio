import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of the context value
export interface AuthContextType {
    isLoggedIn: boolean;
    setIsLoggedIn: (value: boolean) => void;
    appTitle?: string; // Optional, as it may be undefined
    appSubTitle?: string; // Optional, as it may be undefined
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode; 
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const appTitle = process.env.REACT_APP_TITLE;
    const appSubTitle = process.env.REACT_APP_SUBTITLE;

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, appTitle, appSubTitle }}>
            {children}
        </AuthContext.Provider>
    );
}

// Custom hook to use the AuthContext
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}