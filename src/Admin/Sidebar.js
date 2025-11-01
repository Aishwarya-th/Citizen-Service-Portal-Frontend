import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/">Home</Link>
      <Link to="/complaint">File Complaint</Link>
      <Link to="/admin">Admin Dashboard</Link>
      <Link to="/login">Admin Login</Link>
    </div>
  );
}
