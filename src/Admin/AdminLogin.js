import React, { useState } from "react";
import "./AdminLogin.css";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // simple dummy login — later we connect real backend
    if (credentials.username === "admin" && credentials.password === "admin123") {
      alert("Login Successful ✅");
      navigate("/admin-dashboard");
    } else {
      alert("Invalid Credentials ❌");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card">
        <h2>Government Admin Portal</h2>
        <p>Authorized Access Only</p>

        <form onSubmit={handleLogin}>
          <input 
            type="text"
            name="username"
            placeholder="Admin Username"
            value={credentials.username}
            onChange={handleChange}
            required
          />

          <input 
            type="password"
            name="password"
            placeholder="Admin Password"
            value={credentials.password}
            onChange={handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;
