import React, { isValidElement } from 'react';
import { useEffect } from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ children, isLoggedIn, onCLose, ...props }) {
  const token = localStorage.getItem("jwt");
  const location = useLocation();
  const isArticles = location.pathname === '/articles'

  // useEffect(() => {
  //   if(isArticles && isLoggedIn) {
       
  //   }  else if ( !isLoggedIn && isArticles) {
  //      <Navigate to='/signin' />
  //   }
    
  // }, [isArticles, isLoggedIn])
  

  return  isLoggedIn   ? children  : !isArticles && <Navigate to='/signin' />;
      
}

export default ProtectedRoute;