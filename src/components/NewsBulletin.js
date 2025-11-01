import React from "react";
import { motion } from "framer-motion";

const sampleNews = [
  { title: "City launches new waste management app", date: "2025-08-11" },
  { title: "Public grievance response time reduced to 48 hrs", date: "2025-06-21" },
  { title: "Smart streetlight rollout across main roads", date: "2025-05-10" },
];

export default function NewsBulletin() {
  return (
    <section style={{ background: "#f6fbff", padding: "18px 22px", borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <div>
          <strong style={{ color: "#003b6d", fontSize: 18 }}>Latest News & Press</strong>
          <div style={{ marginTop: 8, display: "flex", gap: 8 }}>
            {sampleNews.map((n, i) => (
              <motion.div key={i} whileHover={{ y: -4 }} style={{ background: "white", padding: "10px 12px", borderRadius: 8, boxShadow: "0 6px 18px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>{n.title}</div>
                <div style={{ fontSize: 12, opacity: 0.7 }}>{n.date}</div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <button style={{ background: "#003b6d", color: "white", padding: "10px 14px", borderRadius: 8, border: "none", cursor: "pointer", fontWeight: 700 }}>
            Press Releases
          </button>
        </div>
      </div>
    </section>
  );
}
