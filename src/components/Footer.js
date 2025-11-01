import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const portals = [
    { name: "DigiLocker", icon: "📁" },
    { name: "UMANG", icon: "📲" },
    { name: "Aadhaar", icon: "🆔" },
    { name: "GST Portal", icon: "🏷️" },
    { name: "PMO India", icon: "🏛️" },
  ];

  return (
    <footer style={{ background: "#00294d", color: "white", padding: "36px 22px", marginTop: 30 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h3 style={{ marginBottom: 12 }}>Government Portals</h3>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 20 }}>
          {portals.map((p) => (
            <button
              key={p.name}
              style={{
                padding: "10px 14px",
                background: "white",
                color: "#003b6d",
                borderRadius: 8,
                border: "1px solid rgba(0,0,0,0.06)",
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: 8,
                cursor: "pointer",
              }}
              aria-label={p.name}
              onClick={() => window.open("https://www.google.com/search?q=" + encodeURIComponent(p.name), "_blank")}
            >
              <span style={{ fontSize: 16 }}>{p.icon}</span> <span>{p.name}</span>
            </button>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div>© {new Date().getFullYear()} MyCityPortal</div>
          <div style={{ display: "flex", gap: 16 }}>
            <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
              About
            </Link>
            <Link to="/contact" style={{ color: "white", textDecoration: "none" }}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
