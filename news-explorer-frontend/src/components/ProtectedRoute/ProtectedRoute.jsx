import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ children, isLoggedIn, ...props }) {
  const token = localStorage.getItem("jwt");
  return  isLoggedIn ? children : <Navigate to='/signin' />;
      
}

export default ProtectedRoute;