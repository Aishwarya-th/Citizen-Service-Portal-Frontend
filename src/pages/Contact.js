import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div style={{ padding: 40 }}>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ color: "#003b6d", fontWeight: 700 }}>
        Contact Us
      </motion.h1>

      <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "1fr 320px", gap: 20 }}>
        <div>
          <p style={{ fontSize: 16, marginTop: 10 }}>
            For support, feedback or partnership inquiries reach out:
          </p>
          <p>📧 Email: support@mycityportal.gov.in</p>
          <p>📞 Helpline: 1800-202-2025</p>
          <p>🏢 Central Office: 123 Civic House, City Center</p>
        </div>

        <div style={{ background: "#f8fbff", padding: 18, borderRadius: 10 }}>
          <strong>Office Hours</strong>
          <p style={{ marginTop: 8 }}>Mon - Fri: 9:30am - 6:00pm</p>
          <button style={{ marginTop: 12, padding: "10px 14px", background: "#003b6d", color: "white", border: "none", borderRadius: 8 }}>
            File a Support Request
          </button>
        </div>
      </div>
    </div>
  );
}
