import React from "react";
import { loginWithGoogle, loginWithGitHub } from "../api/auth";
import "./Login.css"; // Import external CSS

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Login</h2>

        <div className="button-container">
          <button onClick={loginWithGoogle} className="google-button">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Google_2015_logo.svg"
              alt="Google"
              className="button-icon"
            />
            Sign in with Google
          </button>

          <button onClick={loginWithGitHub} className="github-button">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub"
              className="button-icon"
            />
            Sign in with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
