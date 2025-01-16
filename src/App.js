// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from './context/AuthContext';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import StudentDashboard from './pages/StudentDashboard';
import TutorDashboard from './pages/TutorDashboard';
import AdminDashboard from './pages/AdminDashboard';
import RoleBasedRedirect from "./components/RoleBasedRedirect";


function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/student-dashboard" element={<RoleBasedRedirect><StudentDashboard /></RoleBasedRedirect>}/>
        <Route path="/tutor-dashboard" element={<RoleBasedRedirect><TutorDashboard /></RoleBasedRedirect>}/>
        <Route path="/admin-dashboard" element={<RoleBasedRedirect><AdminDashboard /></RoleBasedRedirect>}/>
      </Routes>
    </Router>
  </AuthProvider>
  );
}

export default App;
