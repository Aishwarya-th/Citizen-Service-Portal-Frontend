import React from "react";
import { Link, useLocation } from "react-router-dom";
import emblem from "../assets/india.png";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const location = useLocation();
  const { language, toggleLanguage } = useLanguage();
  const t = language === "en";

  const links = [
    { to: "/", label: t ? "Home" : "होम" },
    { to: "/services", label: t ? "Services" : "सेवाएँ" },
    { to: "/explore", label: t ? "Explore India" : "भारत देखें" },
    { to: "/directories", label: t ? "Gov Directories" : "सरकारी निर्देशिकाएँ" },
    { to: "/about", label: t ? "About" : "हमारे बारे में" },
    { to: "/contact", label: t ? "Contact" : "संपर्क" },
  ];

  return (
    <header
      style={{
        background: "#003b6d",
        padding: "12px 22px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 9999,
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      {/* LEFT - Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <img src={emblem} alt="emblem" style={{ width: 44, height: 44 }} />
        <div>
          <div style={{ fontSize: 20, fontWeight: 700 }}>MyCityPortal</div>
          <div style={{ fontSize: 12, opacity: 0.9 }}>
            {t ? "Empowering Citizens • Smart Governance" : "नागरिकों को सशक्त बनाना • स्मार्ट शासन"}
          </div>
        </div>
      </div>

      {/* CENTER - Navigation */}
      <nav style={{ display: "flex", gap: 20, alignItems: "center" }}>
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            style={{
              color: location.pathname === l.to ? "#ffd700" : "white",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            {l.label}
          </Link>
        ))}
      </nav>

      {/* RIGHT - Actions */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
     <button
  onClick={toggleLanguage}
  style={{
    background: "#ffd700",
    border: "none",
    padding: "6px 12px",
    borderRadius: 6,
    cursor: "pointer",
    fontWeight: "bold",
  }}
>
  {language === "en" ? "🇮🇳 हिन्दी" : "EN 🇬🇧"}
</button>

{/* File Complaint */}
<Link to="/complaints" style={{ textDecoration: "none" }}>
  <button
    style={{
      background: "#ff9800",
      border: "none",
      padding: "8px 14px",
      color: "white",
      borderRadius: 6,
      cursor: "pointer",
      fontWeight: "bold",
    }}
  >
    {t ? "File Complaint" : "शिकायत दर्ज करें"}
  </button>
</Link>

{/* Citizen Login */}
<Link to="/login" style={{ textDecoration: "none" }}>
  <button
    style={{
      background: "#4caf50",
      border: "none",
      padding: "8px 14px",
      color: "white",
      borderRadius: 6,
      cursor: "pointer",
      fontWeight: "bold",
    }}
  >
    {t ? "Login" : "लॉगिन"}
  </button>
</Link>
      </div>
    </header>
  );
}
