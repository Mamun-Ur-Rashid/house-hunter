import React from 'react';
import { useAuth } from '../provider/AuthProvider';
import { Navigate, Route } from 'react-router-dom';

const PrivateRoute = () => {
    const { user } = useAuth();
    return user ? <Route { ...props} path={path} /> : <Navigate to ="/login"></Navigate>;
};

export default PrivateRoute;