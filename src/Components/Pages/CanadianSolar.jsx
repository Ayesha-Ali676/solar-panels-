import React from 'react';
import "./Longi.css";
import dataSheet from "../../assets/can.pdf";
import warrantyTerms from "../../assets/can2.pdf";

import panel1 from "../../assets/can.jpg";

const CanadianSolar = () => {
return (
  <>
    <div className="longi-container">
      {/* Left Side */}
      <div className="longi">
        <div className="longi-left">
          <img src={panel1} alt="Longi Solar Panel" className="longi-panel" />
        </div>

        {/* Right Side */}
        <div className="longi-right">
          <h2>
Canadian Solar N-type Bifacial TOPCon Technology</h2>
          <div className="longi-button-group">
            <a href={dataSheet} target="_blank" rel="noopener noreferrer">
              <button> Data Sheet</button>
            </a>
            <a href={warrantyTerms} target="_blank" rel="noopener noreferrer">
              <button> Warranty Terms</button>
            </a>
       
          </div>

       <ul>
  <li>Better energy generation performance</li>
  <li>12 year product warranty</li>
  <li>30 year linear power warranty</li>
  <li>22.36% max module efficiency</li>
  <li>0~3 power tolerance</li>
  <li>&lt;0.4% annual power degradation</li>
  <li>Weight: 29.5 kg</li>
  <li>Dimension: 2465×1134×35 mm</li>
</ul>

        </div>
      </div>

<div className="head-con">
  <h1 className="head">Canadian Solar Panel Prices in 2024:</h1>
 <p>
  Discover the excellence of <strong>Canadian Solar panels</strong> at <strong>Up SkySolar Faisalabad</strong>. As an authorized wholesaler, we offer you access to genuine Canadian Solar panels known for their <strong>efficiency</strong>, <strong>durability</strong>, and <strong>innovation</strong>.
</p>
<p>
  Our solar panels are designed to <strong>maximize energy production</strong> and <strong>withstand the test of time</strong>, ensuring a <strong>reliable</strong> and <strong>sustainable energy source</strong> for your property.
</p>
</div>

<div className="head-con">
  <h1 className="head">Up SkySolar: Your Gateway to Sustainable Energy Solutions in Faisalabad</h1>
  <p>
  At <strong>Up SkySolar</strong>, we are proud to be your trusted dealer and supplier of genuine <strong>Canadian Solar panels</strong> in Faisalabad.
  With a strong commitment to <strong>quality</strong> and <strong>sustainability</strong>, we bring you cutting-edge solar solutions to power your <strong>homes and businesses</strong>.
  Explore the future of energy with our complete range of <strong>solar installation services</strong>.
</p>

<p>
  Our extensive inventory includes advanced <strong>P-Type</strong> and <strong>N-Type</strong> solar panels ranging from <strong>550W to 580W</strong>, 
  available in both <strong>monofacial</strong> and <strong>bifacial</strong> options. As a leading provider, we offer only <strong>original, high-performance panels</strong> 
  that ensure optimal efficiency and long-term durability.
</p>

<p>
  At <strong>Up SkySolar</strong>, we understand the importance of clean energy. That’s why we maintain a <strong>ready stock</strong> of 
  premium solar panels at <strong>wholesale prices</strong>. Whether you're a <strong>homeowner</strong>, <strong>business owner</strong>, or a 
  <strong>solar professional</strong>, we provide cost-effective access to the latest in solar technology.
</p>

<p>
  Choose <strong>Up SkySolar</strong> for <strong>reliable</strong>, <strong>efficient</strong>, and <strong>eco-friendly solar solutions</strong> and 
  become a part of Pakistan’s <strong>green energy revolution</strong> today.
</p>
</div>
<div className="head-con">
  <h1 className="head">Solar Installation Services: Turning Sunlight into Savings</h1>
<p>
  Make the transition to solar energy seamless with <strong>Up SkySolar’s</strong> expert installation services. Our skilled technicians deliver high-quality solar installations across various sectors:
</p>

<ul>
  <li>
    <strong>Residential Installations:</strong> Transform your home into an energy-efficient space with our custom-designed residential solar systems.
  </li>
  <li>
    <strong>Commercial Installations:</strong> Lower your business’s operational costs with solar solutions tailored to your energy consumption needs.
  </li>
  <li>
    <strong>Industrial Installations:</strong> We offer large-scale industrial solar setups, including detailed planning, professional installation, and post-installation maintenance services.
  </li>
  <li>
    <strong>Agricultural Installations:</strong> Provide reliable and cost-effective power for your agricultural operations—supporting farmers with consistent energy for irrigation and more.
  </li>
</ul>
</div>
 
    </div>
    <footer className="footer">
        <div className="footer-content">

          {/* Left: Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Middle: Contact Info */}
          <div className="footer-column">
            <h3>Contact Us</h3>
            <p><i className="fas fa-phone"></i> 03137685006</p>
            <p><i className="fas fa-envelope"></i> upskysolar@gmail.com</p>

          </div>

          {/* Right: Office Hours & Socials */}
          <div className="footer-column">
            <h3>Office Hours</h3>
            <p>Mon-Sat: <strong>9am – 5pm</strong></p>
            <p>Sun: <strong>Closed</strong></p>

            <div className="footer-social">
              <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>

              <a href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://youtube.com/yourpage" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>

              <a href="https://linkedin.com/yourpage" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2025 UP SKYSOLAR.com. All rights reserved
        </div>
      </footer>
      </>
  );
};

export default CanadianSolar