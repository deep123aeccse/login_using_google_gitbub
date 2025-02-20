import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import "../styles.css";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard-container">
      <h1>Welcome, {user?.name || "User"}!</h1>
      <p>Email: {user?.email}</p>
      <div className="nav-links">
        <Link className="nav-link" to="/profile">Profile</Link>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </div>
    </div>
  );
};
export default Dashboard;