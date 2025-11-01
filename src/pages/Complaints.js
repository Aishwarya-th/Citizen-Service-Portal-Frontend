import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Complaints() {
  const { language } = useLanguage();
  const t = language === "en";

  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t ? "Complaint submitted!" : "शिकायत दर्ज हो गई!");
  };

  return (
    <div style={{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      minHeight:"80vh",
      background:"#f2f4f7"
    }}>
      <div style={{
        width:"420px",
        background:"white",
        padding:"25px",
        borderRadius:"10px",
        boxShadow:"0 4px 10px rgba(0,0,0,0.1)"
      }}>
        
        <h2 style={{ textAlign:"center", marginBottom:"18px", color:"#003B6D" }}>
          {t ? "File a Complaint" : "शिकायत दर्ज करें"}
        </h2>

        <form onSubmit={handleSubmit}>

          {/* Category */}
          <label style={{ fontWeight:"bold" }}>
            {t ? "Complaint Category:" : "शिकायत श्रेणी:"}
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              width:"100%",
              padding:"10px",
              margin:"8px 0",
              borderRadius:"6px",
              border:"1px solid #ccc"
            }}
          >
            <option value="">{t ? "Select Category" : "श्रेणी चुनें"}</option>
            <option>{t ? "Garbage Issue" : "कचरा संबंधित समस्या"}</option>
            <option>{t ? "Water Supply Issue" : "पानी आपूर्ति समस्या"}</option>
            <option>{t ? "Street Light Issue" : "स्ट्रिट लाइट समस्या"}</option>
            <option>{t ? "Road Damage" : "सड़क क्षति"}</option>
          </select>

          {/* Description */}
          <label style={{ fontWeight:"bold" }}>
            {t ? "Complaint Description:" : "शिकायत विवरण:"}
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            placeholder={t ? "Describe the issue" : "समस्या का विवरण दें"}
            style={{
              width:"100%",
              padding:"10px",
              margin:"8px 0",
              borderRadius:"6px",
              border:"1px solid #ccc"
            }}
          />

          {/* Location */}
          <label style={{ fontWeight:"bold" }}>
            {t ? "Location:" : "स्थान:"}
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder={t ? "Enter area/landmark" : "क्षेत्र / लैंडमार्क दर्ज करें"}
            style={{
              width:"100%",
              padding:"10px",
              margin:"8px 0",
              borderRadius:"6px",
              border:"1px solid #ccc"
            }}
          />

          {/* Submit */}
          <button
            type="submit"
            style={{
              width:"100%",
              background:"#003b6d",
              color:"white",
              padding:"12px",
              border:"none",
              borderRadius:"6px",
              marginTop:"10px",
              cursor:"pointer",
              fontWeight:"bold"
            }}
          >
            {t ? "Submit Complaint" : "शिकायत सबमिट करें"}
          </button>
          
        </form>
      </div>
    </div>
  );
}
