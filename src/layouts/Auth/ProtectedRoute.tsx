import { localStorageHelper } from '@utils';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from './AuthProvider';

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { user, token } = useContext(AuthContext);

  console.log({ user, token });
  // return children;
  return user && token ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default ProtectedRoute;
