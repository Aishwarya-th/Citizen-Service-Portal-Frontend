import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div style={{ padding: 40 }}>
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}>
        <h1 style={{ color: "#003b6d", fontWeight: 700 }}>About MyCityPortal</h1>
        <p style={{ marginTop: 12, fontSize: 16, maxWidth: 900 }}>
          MyCityPortal is a digital civic platform designed to empower citizens by enabling efficient reporting of civic issues,
          accessing services, and staying updated with government initiatives. The portal aims to make service delivery transparent,
          accountable and timely.
        </p>

        <div style={{ marginTop: 22, display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 18 }}>
          <div style={{ padding: 18, background: "#f8fbff", borderRadius: 10, borderLeft: "6px solid #003b6d", fontWeight: 700 }}>
            Citizen-first approach
          </div>
          <div style={{ padding: 18, background: "#f8fbff", borderRadius: 10, borderLeft: "6px solid #003b6d", fontWeight: 700 }}>
            Transparent operations
          </div>
          <div style={{ padding: 18, background: "#f8fbff", borderRadius: 10, borderLeft: "6px solid #003b6d", fontWeight: 700 }}>
            Faster grievance resolution
          </div>
        </div>
      </motion.div>
    </div>
  );
}
