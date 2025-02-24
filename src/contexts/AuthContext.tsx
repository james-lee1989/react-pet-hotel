import { createContext, useContext, PropsWithChildren, useState } from 'react';
import { User } from '../api/types';

type AuthState = {
    isLoggedIn: boolean;
    user: User | null;
    setIsLoggedIn: (value: boolean) => void;
    setUser: (value: User) => void;
}

const initialState = {
    isLoggedIn: false,
    user: null,
    setIsLoggedIn: () => {},
    setUser: () => {}
}

const AuthContext = createContext<AuthState>(initialState);

const AuthContextProvider = ({children}: PropsWithChildren) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);

    const contextValue = {
        isLoggedIn,
        user,
        setIsLoggedIn,
        setUser
    }
    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export const useAuthContext = () => useContext(AuthContext);

export default AuthContextProvider;