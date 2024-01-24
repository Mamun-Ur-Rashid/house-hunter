import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    useEffect( () => {
        const storedToken = localStorage.getItem('token');
        if(storedToken) {
            setUser({token: storedToken});
        }
    },[]);

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
    };
    

const authInfo = {
    user, logout, setUser }

return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>

};
export const useAuth = () => {
    return useContext(AuthContext);
}