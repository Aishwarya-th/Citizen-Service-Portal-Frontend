import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import GovDirectories from "./pages/GovDirectories";
import ExploreIndia from "./pages/ExploreIndia";
import Complaints from "./pages/Complaints";


export default function App() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#fff" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/directories" element={<GovDirectories />} />
          <Route path="/explore" element={<ExploreIndia />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
