import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    if(loading){
        return <div className='text-center'>
            <Spinner  animation="border" variant="primary" />
        </div>
    }
    if(user){
        return children
    }
    console.log(user)
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoutes;