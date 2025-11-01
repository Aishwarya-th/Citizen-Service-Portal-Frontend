import React from "react";
import { motion } from "framer-motion";

import mysore from "../assets/cities/mysore.jpg";
import chandigarh from "../assets/cities/chandigarh.jpg";
import gangtok from "../assets/cities/gangtok.jpg";
import indore from "../assets/cities/indore.jpg";

export default function ExploreIndia() {
  const places = [
    { name: "Chandigarh", desc: "Planned city with beautiful public spaces", img: chandigarh},
    { name: "Mysore", desc: "Eco-friendly urban planning & cleanliness",img:mysore },
    { name: "Indore", desc: "Strong civic sense and cleanliness",img:indore},
    { name: "Gangtok", desc: "Hillside city with sustainable efforts",img:gangtok },
  ];

  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ color: "#003b6d", fontWeight: 700 }}>Explore India</h1>

      <div style={{ marginTop: 18, display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        {places.map((p, i) => (
          <motion.div key={i} whileHover={{ scale: 1.02 }} style={{ background: "#fff", borderRadius: 12, overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}>
            <img src={p.img} alt={p.name} style={{ width: "100%", height: 180, objectFit: "cover" }} />
            <div style={{ padding: 14 }}>
              <h3 style={{ margin: 0, color: "#003b6d" }}>{p.name}</h3>
              <p style={{ marginTop: 8 }}>{p.desc}</p>
              <div style={{ display: "flex", gap: 8 }}>
                <button style={{ padding: "8px 10px", borderRadius: 8, border: "1px solid #003b6d", background: "white", fontWeight: 700 }}>Civic Model</button>
                <button style={{ padding: "8px 10px", borderRadius: 8, border: "none", background: "#003b6d", color: "white", fontWeight: 700 }}>View</button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
