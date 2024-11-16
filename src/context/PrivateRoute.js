import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext";
import { PuffLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(UserContext);

if (loading) {
  return <div className="loader"><PuffLoader  color="#355d5f" /></div>;
}

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
