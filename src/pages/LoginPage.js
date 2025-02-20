import React from "react";
import "../styles.css";

const LoginPage = () => {
  const googleLogin = () => {
    window.location.href = "https://gitgoogleloginbackend-production.up.railway.app/oauth2/authorization/google";
  };
  
  const githubLogin = () => {
    window.location.href = "https://gitgoogleloginbackend-production.up.railway.app/oauth2/authorization/github";
  };

  return (
    <div className="login-container">
      <h2>Sign In</h2>
      <button className="login-btn google" onClick={googleLogin}>Sign in with Google</button>
      <button className="login-btn github" onClick={githubLogin}>Sign in with GitHub</button>
    </div>
  );
};
export default LoginPage;