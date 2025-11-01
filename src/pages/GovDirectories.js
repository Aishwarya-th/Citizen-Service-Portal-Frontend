import React from "react";
import { motion } from "framer-motion";

export default function GovDirectories() {
  const dirs = [
    { name: "Municipal Corporation", phone: "1800-100-111" },
    { name: "Water Supply Department", phone: "1800-101-222" },
    { name: "Electricity Board", phone: "1800-102-333" },
    { name: "Road & Traffic Department", phone: "1800-103-444" },
    { name: "Public Works Department", phone: "1800-104-555" },
  ];

  return (
    <div style={{ padding: 40 }}>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: "#003b6d", fontWeight: 700 }}>
        Government Directories
      </motion.h1>

      <div style={{ marginTop: 18, display: "grid", gap: 14 }}>
        {dirs.map((d, i) => (
          <motion.div key={i} whileHover={{ x: 6 }} style={{ background: "#fff", padding: 18, borderRadius: 12, borderLeft: "6px solid #003b6d", boxShadow: "0 8px 20px rgba(0,0,0,0.04)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: 800 }}>{d.name}</div>
                <div style={{ marginTop: 6, opacity: 0.75 }}>{d.phone}</div>
              </div>
              <div>
                <button style={{ padding: "8px 10px", borderRadius: 8, border: "none", background: "#003b6d", color: "white", fontWeight: 700 }}>
                  View Details
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
