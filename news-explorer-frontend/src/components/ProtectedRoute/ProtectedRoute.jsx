import React from 'react';
import { Route, Navigate } from 'react-router-dom';

function ProtectedRoute({ children, isLoggedIn, ...props }) {
  const token = localStorage.getItem("jwt");
  return (
    <Route {...props}>
       {(token || isLoggedIn) ? children : <Navigate to='/signin' /> }
    </Route>
  )
}

export default ProtectedRoute;