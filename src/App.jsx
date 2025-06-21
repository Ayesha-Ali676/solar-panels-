import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Navbar from "./Components/Navbar";

// Page imports
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";

import Residential from "./Components/Pages/Residential";
import Industrial from "./Components/Pages/Industrial";
import LongiSolar from "./Components/Pages/LongiSolar";
import JinkoSolar from "./Components/Pages/JinkoSolar";
import CanadianSolar from "./Components/Pages/CanadianSolar";
import JASolar from "./Components/Pages/JASolar";
import Authenticity from "./Components/Pages/Authenticity";
import Contact from "./Components/Pages/Contact";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        
        <Route path="/residential" element={<Residential />} />
        <Route path="/industrial" element={<Industrial />} />
        <Route path="/longi" element={<LongiSolar />} />
        <Route path="/jinko" element={<JinkoSolar />} />
        <Route path="/canadian" element={<CanadianSolar />} />
        <Route path="/ja" element={<JASolar />} />
        <Route path="/authenticity" element={<Authenticity />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;



