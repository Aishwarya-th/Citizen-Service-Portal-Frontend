import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Login() {
  const { language } = useLanguage();
  const t = language === "en";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t ? "Login successful!" : "लॉगिन सफल!");
  };

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "80vh",
      background: "#f2f4f7"
    }}>
      <div style={{
        width: "90%",maxWidth: "350px",
        background: "white",
        padding: "25px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ textAlign: "center", marginBottom: "18px", color:"#003b6d" }}>
          {t ? "Citizen Login" : "नागरिक लॉगिन"}
        </h2>

        <form onSubmit={handleSubmit}>
          <label style={{ fontWeight: "bold" }}>
            {t ? "Email" : "ईमेल"}
          </label>
          <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder={t ? "Enter your email" : "अपना ईमेल दर्ज करें"}
            style={{
              width:"100%", padding:"10px", margin:"8px 0", borderRadius:"6px",
              border:"1px solid #ccc"
            }}
          />

          <label style={{ fontWeight: "bold" }}>
            {t ? "Password" : "पासवर्ड"}
          </label>
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder={t ? "Enter password" : "पासवर्ड दर्ज करें"}
            style={{
               padding:"10px", margin:"8px 0", borderRadius:"6px",
              border:"1px solid #ccc"
            }}
          />

          <button type="submit" style={{
            width: "100%", background:"#003b6d", color:"white",
            padding:"12px", border:"none", borderRadius:"6px",
            marginTop:"10px", cursor:"pointer", fontWeight:"bold"
          }}>
            {t ? "Login" : "लॉगिन"}
          </button>
        </form>

        <div style={{ marginTop:"10px", textAlign:"center", fontSize:"14px" }}>
          {t ? "New user?" : "नया उपयोगकर्ता?"}&nbsp;
          <a href="/signup" style={{ color:"#003b6d", fontWeight:"bold" }}>
            {t ? "Register here" : "यहाँ रजिस्टर करें"}
          </a>
        </div>
      </div>
    </div>
  );
}
