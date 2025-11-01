
// FIX for react-slick + framer-motion compatibility
import { useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import indiaMap from "../assets/india-Map.png";
import NewsBulletin from "../components/NewsBulletin";
import emblem from "../assets/india.png";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import mysore from "../assets/cities/mysore.jpg";
import chandigarh from "../assets/cities/chandigarh.jpg";

import indore from "../assets/cities/indore.jpg";

export default function Home() {
  const navigate = useNavigate();
  const t = true; // keep english; integrate with your LanguageContext if needed

  const rights = [
    t ? "Right to file civic complaints" : "नागरिक शिकायत दर्ज करने का अधिकार",
    t ? "Right to check complaint status" : "शिकायत की स्थिति देखने का अधिकार",
    t ? "Right to safe public services" : "सुरक्षित सार्वजनिक सेवाओं का अधिकार",
    t ? "Right to clean surroundings" : "स्वच्छ वातावरण का अधिकार",
  ];

  const stories = [
    { title: "Smart Clean City Model", text: "Indore sets benchmark in civic cleanliness." },
    { title: "Digital Grievance Redressal", text: "Faster citizen complaint resolution achieved." },
    { title: "Sustainable Waste System", text: "Mysuru leads with green waste management." },
  ];

  const explorePlaces = [
    { name: "Indore", description: "India's Cleanest City", img: indore },
    { name: "Chandigarh", description: "Planned City Excellence", img:chandigarh },
    { name: "Mysuru", description: "Eco & Clean Model City", img: mysore},
  ];

  const settings = { dots: true, infinite: true, autoplay: true, speed: 800, slidesToShow: 1, slidesToScroll: 1 };
  useEffect(() => {}, []);

  return (
    <>
      {/* Emblem Header (centered for home aesthetic) */}
      <div style={{ textAlign: "center", padding: "26px 20px 6px 20px" }}>
        <img src={emblem} alt="Emblem" style={{ width: 84, opacity: 0.95 }} />
        <h1 style={{ margin: "8px 0", fontSize: 28, color: "#003b6d", fontWeight: 700 }}>MyCityPortal</h1>
        <p style={{ fontSize: 14, color: "#003b6d", opacity: 0.85 }}>Empowering Citizens, Enabling Smart Governance</p>
      </div>

      <NewsBulletin />

      {/* Hero */}
      <motion.section initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ textAlign: "center", padding: "36px 16px" }}>
        <h2 style={{ fontSize: 30, color: "#003b6d", fontWeight: 700 }}>{t ? "Welcome to My City Portal" : "मेरे शहर पोर्टल में आपका स्वागत है"}</h2>
        <p style={{ fontSize: 16, marginTop: 10 }}>{t ? "A smart way to access city services & resolve civic problems." : "शहर सेवाओं का उपयोग करने और नागरिक समस्याओं को हल करने का स्मार्ट तरीका।"}</p>

        <div style={{ marginTop: 22 }}>
          <button onClick={() => navigate("/services")} style={{ marginRight: 12, background: "#003b6d", color: "white", padding: "12px 18px", fontSize: 15, borderRadius: 10, border: "none", cursor: "pointer", fontWeight: 700 }}>
            Get Started
          </button>
          <button onClick={() => navigate("/directories")} style={{ background: "white", padding: "12px 18px", fontSize: 15, borderRadius: 10, border: "1px solid #003b6d", cursor: "pointer", fontWeight: 700 }}>
            Explore Services
          </button>
        </div>

        <div style={{ marginTop: 30 }}>
          <img src={indiaMap} alt="India Map" style={{ width: "65%", maxWidth: 540, borderRadius: 8, boxShadow: "0 6px 20px rgba(0,0,0,0.06)" }} />
        </div>
      </motion.section>

      {/* Rights */}
      <section style={{ padding: "30px 18px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h3 style={{ color: "#003b6d", fontWeight: 700 }}>Citizen Rights</h3>
          <div style={{ display: "grid", gap: 18, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", marginTop: 16 }}>
            {rights.map((r, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} style={{ padding: 18, background: "#f8fbff", borderLeft: "6px solid #003b6d", borderRadius: 12, fontWeight: 700, boxShadow: "0 8px 20px rgba(3,59,109,0.03)" }}>
                {r}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases & Stories */}
      <section style={{ padding: "30px 18px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h3 style={{ color: "#003b6d", fontWeight: 700 }}>Stories from the Core of Our Nation</h3>
          <div style={{ marginTop: 14 }}>
            <Slider {...settings}>
              {stories.map((s, idx) => (
                <div key={idx} style={{ padding: 12 }}>
                  <motion.div whileHover={{ y: -6 }} style={{ background: "#eef6ff", padding: 22, borderRadius: 12, boxShadow: "0 8px 22px rgba(0,0,0,0.06)" }}>
                    <h4 style={{ margin: 0 }}>{s.title}</h4>
                    <p style={{ marginTop: 8 }}>{s.text}</p>
                    <button style={{ marginTop: 10, padding: "8px 12px", borderRadius: 8, border: "none", background: "#003b6d", color: "white", fontWeight: 700, cursor: "pointer" }}>
                      Read More
                    </button>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* Explore India Carousel */}
      <section style={{ padding: "30px 18px", background: "#f5fbff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h3 style={{ color: "#003b6d", fontWeight: 700 }}>Exploring India</h3>
          <p style={{ marginTop: 8 }}>Important and beautiful places with high civic maintenance & community pride.</p>

          <div style={{ marginTop: 18 }}>
            <Slider {...settings}>
              {explorePlaces.map((p, i) => (
                <div key={i} style={{ padding: 10 }}>
                  <motion.div whileHover={{ scale: 1.02 }} style={{ background: "white", borderRadius: 12, padding: 0, boxShadow: "0 10px 30px rgba(0,0,0,0.06)" }}>
                    <img src={p.img} alt={p.name} style={{ width: "100%", height: 300, objectFit: "cover", borderTopLeftRadius: 12, borderTopRightRadius: 12 }} />
                    <div style={{ padding: 16 }}>
                      <h4 style={{ margin: 0, color: "#003b6d" }}>{p.name}</h4>
                      <p style={{ marginTop: 8 }}>{p.description}</p>
                      <div style={{ display: "flex", gap: 8 }}>
                        <button style={{ padding: "8px 10px", borderRadius: 8, border: "1px solid #003b6d", background: "white", fontWeight: 700 }}>View Civic Model</button>
                        <button style={{ padding: "8px 10px", borderRadius: 8, border: "none", background: "#003b6d", color: "white", fontWeight: 700 }}>Visit</button>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}
