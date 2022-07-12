import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function PrivateRoute({ children }) {
  const auth = useSelector((state) => state.user);
  // console.log(auth);
  return (
    auth ? children : <Navigate to="/" />

  );
}

export default PrivateRoute;
