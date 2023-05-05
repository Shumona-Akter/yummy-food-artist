import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorLayout = () => {
    const error = useRouteError();
  console.error(error);
    return (
        <div style={{height:"100vh"}} className='container text-center text-danger d-flex justify-content-center align-items-center'>
            <div>
            <h1>Sorry😢!</h1>
            <p>
              <i>{error.data || error.message}</i>
            </p>
            <p>
              <i>{error.status || error.message}</i>
              <i>{error.statusText || error.message}</i>
            </p>
            </div>
    </div>
    );
};

export default ErrorLayout;