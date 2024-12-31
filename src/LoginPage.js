// File: LoginPage.js

import React, { useState } from "react";
import axios from "axios";
import "./LoginPage.css";

const LoginPage = ({ setIsAuthenticated }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });

      if (response.data.success) {
        const sessionResponse = await axios.post(
          "http://localhost:5000/start-login",
          { username, password },
          { withCredentials: true }
        );

        if (sessionResponse.data.success) {
          setIsAuthenticated(true);
        } else {
          setError("Failed to start session.");
        }
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("Failed to connect to the server. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;