import React from "react";
import { useAuth } from "../context/AuthContext";
import "../styles.css";

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user?.name}</p>
      <p><strong>Email:</strong> {user?.email}</p>
      <p><strong>Provider:</strong> {user?.provider}</p>
    </div>
  );
};

export default ProfilePage;