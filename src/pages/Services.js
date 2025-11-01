import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    { title: "Complaint Registration", desc: "Report civic issues with photos & location." },
    { title: "Complaint Tracking", desc: "Track status updates and response times." },
    { title: "Municipal Services", desc: "Apply for water, sanitation, streetlight services." },
    { title: "Resource Library", desc: "Guides, documents & service standards." },
  ];

  return (
    <div style={{ padding: 40 }}>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: "#003b6d", fontWeight: 700 }}>
        Services
      </motion.h1>

      <div style={{ marginTop: 18, display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
        {services.map((s, i) => (
          <motion.div key={i} whileHover={{ y: -6 }} style={{ background: "#fff", padding: 18, borderRadius: 12, boxShadow: "0 10px 30px rgba(0,0,0,0.05)" }}>
            <h3 style={{ margin: 0, color: "#003b6d" }}>{s.title}</h3>
            <p style={{ marginTop: 8 }}>{s.desc}</p>
            <button style={{ marginTop: 10, padding: "8px 12px", background: "#003b6d", color: "white", border: "none", borderRadius: 8, fontWeight: 700 }}>
              Use Service
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

