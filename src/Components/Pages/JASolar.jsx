import React from 'react';
import "./Longi.css";
import dataSheet from "../../assets/ja1.pdf";
import warrantyTerms from "../../assets/ja2.pdf";

import panel1 from "../../assets/ja.png";

const JASolar = () => {
return (
    <div className="longi-container">
      {/* Left Side */}
      <div className="longi">
        <div className="longi-left">
          <img src={panel1} alt="Longi Solar Panel" className="longi-panel" />
        </div>

        {/* Right Side */}
        <div className="longi-right">
          <h2>
JA Solar Bifacial mono JAM72D30 LB 555-580w
</h2>
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
  <li>Dimension: 2465 × 1134 × 35 mm</li>
</ul>


        </div>
      </div>

<div className="head-con">
  <h1 className="ja">JA Solar Panel Prices in Pakistan: A Leading Force in Solar Technology</h1>
<p><strong>Welcome to the Future of Sustainable Energy with Up SkySolar Faisalabad!</strong></p>

<p>Explore our extensive range of <strong>JA Solar Panels</strong>, including <strong>high-performance 540W–565W N-Type and P-Type</strong> models. At <strong>Up SkySolar</strong>, we offer <strong>original JA Solar panels at unbeatable wholesale prices</strong>, ensuring affordability without compromising on quality.</p>

<p>We integrate <strong>cutting-edge solar technology</strong> to boost your system's energy efficiency. Whether you're upgrading your home, business, or industrial facility, our <strong>professional installation and maintenance services</strong> guarantee a <strong>smooth and seamless transition</strong> to clean, renewable energy.</p>

<p>Partner with <strong>Up SkySolar Faisalabad</strong>—your trusted source for <strong>authentic JA Solar Panels</strong>—and take the first step toward a <strong>greener, more sustainable future</strong>.</p>

</div>

<div className="head-con">
  <h1 className="ja">Empowering Faisalabad with Top-notch & Latest Solar Solutions</h1>
<p><strong>Up SkySolar</strong> specializes in providing <strong>top-rated solar solutions</strong> with <strong>professional installation services</strong> in Faisalabad, Pakistan.</p>

<p>From <strong>solar system installation</strong> to <strong>maintenance services</strong>, Up SkySolar ensures a <strong>seamless and reliable experience</strong> for its customers.</p>

<p>Discover the <strong>world’s leading solar panel brands</strong>, top solar installation companies, and the <strong>largest producers of solar energy</strong> globally.</p>

<p>Dive into the <strong>latest solar technology</strong>, explore <strong>solar system prices in Pakistan</strong>, and learn about the <strong>best solar power companies</strong> powering a sustainable future.</p>


</div>
<div className="head-con">
  <h1 className="ja">Unraveling the Brilliance of JA Solar Panels</h1>
<p>Delve into the realm of <strong>JA Solar panels</strong>, backed by <strong>innovation and excellence</strong>. From specifications to pricing, <strong>Up SkySolar</strong> offers a comprehensive range of JA Solar products. Learn about <strong>JA Solar’s double glass technology</strong>, efficient modules, and explore the diverse product lineup.</p>

<p>Whether you seek <strong>solar solutions for your home or business</strong>, Up SkySolar is your go-to partner, delivering <strong>top-tier solar panel installation services</strong> and contributing to the <strong>renewable energy landscape in Faisalabad</strong>.</p>

<p><strong>JA Solar’s Deep Blue 3.0 technology</strong> is a game-changer in the world of solar innovation. Designed to maximize efficiency and performance, Deep Blue 3.0 takes solar energy to new heights. Its advanced features enhance power generation, ensuring you harness the <strong>maximum energy from every ray of sunlight</strong>.</p>

<p>With <strong>state-of-the-art cell technology</strong>, intelligent shading algorithms, and superior temperature coefficient characteristics, Deep Blue 3.0 guarantees <strong>optimal performance even in challenging conditions</strong>. Embrace the future of clean energy with <strong>JA Solar</strong>, where Deep Blue 3.0 technology sets the standard for <strong>sustainable, high-yield solar solutions</strong>.</p>

<p>This section covers everything from <strong>solar panel prices in Faisalabad</strong> to the <strong>largest solar power producers globally</strong>, ensuring readers have a holistic understanding of <strong>JA Solar</strong>, <strong>Up SkySolar</strong>, and the <strong>dynamic solar energy landscape</strong>.</p>

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
    </div>
  );
};
export default JASolar