import React from 'react'
import { Navigate } from 'react-router-dom';
import { RoutesPath } from './Component/helper';

const ProtectedRoute = ({ children }) => {

    const userData = localStorage.getItem('userData');
    if(userData){
        return children
    }
    return <Navigate to={RoutesPath.SIGNIN}/>
}

export default ProtectedRoute