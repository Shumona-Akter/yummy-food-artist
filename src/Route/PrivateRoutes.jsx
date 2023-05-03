import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)

    const location = useLocation()
    if(loading){
        return <div className='text-center'>
            <Spinner  animation="border" variant="primary" />
        </div>
    }
    if(user){
        return children
    }
    console.log(user)
    return <Navigate to="/login" state={{form:location}} replace></Navigate>
};

export default PrivateRoutes;