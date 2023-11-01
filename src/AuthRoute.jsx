import React from 'react'
import { Navigate } from 'react-router-dom';
import { RoutesPath } from './Component/helper';

let AuthRoute = ({children}) => {
    const userData = localStorage.getItem('userData');
    if(!userData) {
        return children
    }
    return <Navigate to={RoutesPath.DASHBOARD}/>
}

export default AuthRoute;