import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { logout } from "../api/auth";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <h2>Welcome, {user?.name}</h2>
      <p>Email: {user?.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Dashboard;
