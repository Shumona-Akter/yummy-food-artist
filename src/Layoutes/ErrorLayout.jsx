import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorLayout = () => {
    const error = useRouteError();
  console.error(error);
    return (
        <div className='container text-center text-danger'>
            <h1>Sorry😢!</h1>
            <p>
              <i>{error.data || error.message}</i>
            </p>
            <p>
              <i>{error.status || error.message}</i>
              <i>{error.statusText || error.message}</i>
            </p>
    </div>
    );
};

export default ErrorLayout;