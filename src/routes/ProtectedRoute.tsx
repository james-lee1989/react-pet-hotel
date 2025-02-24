import { PropsWithChildren } from 'react';
import { useLocation } from "wouter";
import { useAuthContext } from '../contexts/AuthContext';

function ProtectedRoute({children}: PropsWithChildren) {
    const [location, navigate] = useLocation();
    const {isLoggedIn} = useAuthContext();

    if (location === '/login') {
        if (isLoggedIn) {
            navigate('/');
            return;
        }
        return children;
    }

    if (location === '/') {
        if (isLoggedIn) return children;
        navigate('/login');
        return null;
    }
    
    return null;
}

export default ProtectedRoute;