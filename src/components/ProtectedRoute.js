import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
 var isLoggedIn= false;
 
    const currentuser = localStorage.getItem("user");
    if (currentuser.role==="admin") {
      isLoggedIn = true;
    }
  
  
  return isLoggedIn ? children : <Navigate to="/Login" />;
};

export default ProtectedRoute;