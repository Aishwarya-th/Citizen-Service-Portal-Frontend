import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

export default function AdminDashboard() {
  const [complaints, setComplaints] = useState([]);
  const [error, setError] = useState("");

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) {
      setError("Not authorized. Please login.");
      return;
    }

    (async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/admin/complaints`, {
          headers: { Authorization: `Bearer ${token}` }
        });

        if (!res.ok) {
          const d = await res.json();
          setError(d.message || "Failed to load");
          return;
        }

        const data = await res.json();
        setComplaints(data.complaints || []);
      } catch (err) {
        setError("Server error");
      }
    })();
  }, [token]);

  const logout = () => {
    localStorage.removeItem("adminToken");
    window.location.href = "/admin";
  };

  return (
    <>
      <Navbar />
      <Sidebar />

      <div style={{ marginLeft: "260px", padding: "90px 20px" }}>
        <h2>Admin Dashboard</h2>

        <button onClick={logout} style={{ float: "right", padding: "6px 10px" }}>
          Logout
        </button>

        {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

        {/* Metrics Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <div className="card">Total Complaints: {complaints.length}</div>
          <div className="card">Pending: {complaints.length}</div>
          <div className="card">Resolved: 0</div>
        </div>

        {/* Complaints Table */}
        <h3 style={{ marginTop: "40px" }}>Complaints List</h3>

        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 10 }}>
          <thead>
            <tr style={{ background: "#f0f0f0" }}>
              <th style={{ padding: 8 }}>Name</th>
              <th style={{ padding: 8 }}>Email</th>
              <th style={{ padding: 8 }}>Category</th>
              <th style={{ padding: 8 }}>Description</th>
            </tr>
          </thead>
          <tbody>
            {complaints.length === 0 && (
              <tr>
                <td colSpan="4" style={{ padding: 12 }}>No complaints yet</td>
              </tr>
            )}

            {complaints.map((c, i) => (
              <tr key={i} style={{ borderBottom: "1px solid #eee" }}>
                <td style={{ padding: 8 }}>{c.name}</td>
                <td style={{ padding: 8 }}>{c.email}</td>
                <td style={{ padding: 8 }}>{c.category}</td>
                <td style={{ padding: 8 }}>{c.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
