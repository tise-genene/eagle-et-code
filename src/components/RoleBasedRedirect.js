import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const RoleBasedRedirect = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (user.role === 'Student') {
    return <Navigate to="/student-dashboard" />;
  } else if (user.role === 'Tutor') {
    return <Navigate to="/tutor-dashboard" />;
  } else if (user.role === 'Admin') {
    return <Navigate to="/admin-dashboard" />;
  }

  return null;
};

export default RoleBasedRedirect;
