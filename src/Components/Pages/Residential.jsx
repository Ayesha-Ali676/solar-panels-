import React from 'react'
import "./Res.css"
import onGrid from "../../assets/solar-products.jpg";      // Use ../../ if your assets folder is one level up
import offGrid from "../../assets/solar-products2.jpg";
import hybrid from "../../assets/solar-products3.jpg";
import netMetering from "../../assets/solar-products4.jpg";
import streetLights from "../../assets/solar-products5.jpg";


import CCTVCameras from "../../assets/cctv.jpg";
import AudioVideoIntercom from "../../assets/audio-video.jpg";
import SecurityAlarms from "../../assets/alarm.jpg";
import Electricfencing from "../../assets/electric.jpg";

import gate from "../../assets/gate.jpg";
import climate from "../../assets/climate.jpg";
import lock from "../../assets/locks.jpg";
import light from "../../assets/smart-light.jpg";

import { Link } from "react-router-dom";

const solarTypes = [
  { title: "On-Grid Solar", image: onGrid },
  { title: "Off-Grid Solar", image: offGrid },
  { title: "Hybrid Solar", image: hybrid },
  { title: "Net Metering", image: netMetering },
  { title: "Street Lights", image: streetLights },
];
const security = [
  { title: "CCTV Cameras", image: CCTVCameras },
  { title: "Audio Video Intercom", image: AudioVideoIntercom },
  { title: "Security Alarms", image: SecurityAlarms },
  { title: "Electric fencing", image: Electricfencing },

];

const automation = [
  { title: "Smart Lights", image: light },
  { title: "Auto Lock System", image: lock },
  { title: "Climate Control", image: climate },
  { title: "Gate Automation", image: gate },

];


const Residential = () => {
  return (
    <div className="hero">
      <div className="image-wrapper">
        <img src="/sol.jpg" alt="About" className="img" />
        <div className="overlay"></div>
      </div>

      <div className="content">
        <h1>
          Residential Solar, Home Automation
          <br />
          & Surveillance System
        </h1>
      </div>

      <div className="solar-system-section">
        <div className="solar-left">
          <h2 className="solar-title">SOLAR SYSTEM</h2>
          <h3 className="solar-subtitle">Need Based Solar Systems</h3>
        </div>

        <div className="solar-right">
          <p>
           SkySolar specializes in delivering affordable and customized residential solar solutions tailored to the unique energy needs of homeowners, with systems ranging from 5KW to 25KW. We focus on carefully assessing each household’s specific requirements, evaluating solar potential, and providing expert recommendations that align with customer preferences—whether for on-grid, off-grid, hybrid, DC solar systems, or net metering solutions.
          </p>
        </div>
      </div>

      {/* 🔻 Cards Section Below solar-right */}
      <div className="solar-card-section">
        {solarTypes.map((item, index) => (
          <div className="solar-card" key={index}>
            <div className="card-img-wrapper">
              <img src={item.image} alt={item.title} className="card-img" />
            </div>
            <h3 className="card-title">{item.title}</h3>
          </div>
        ))}
      </div>

      <div className="section">
        <div className="left">
          <p>Enhance your security protocols with our comprehensive solutions, customized to meet your distinct requirements, and establish a secure environment for your business. Our cutting-edge CCTV cameras and electric fencing solutions ensure continuous 24/7 monitoring. We offer a wide array of premium brands such as Hikvision, Dahua, Alhua, and CP Plus—renowned leaders in the security technology industry. Complemented by our advanced CCTV control centers, we deliver real-time monitoring and rapid response, ensuring the protection of your assets and personnel.</p>
        </div>

        <div className="right">
          <h2 className="solar-title">SECURITY SYSTEM</h2>
          <h3 className="solar-subtitle">
            High Quality Security Systems</h3>
        </div>
      </div>
      <div className="solar-card-section">
        {security.map((item, index) => (
          <div className="solar-card" key={index}>
            <div className="card-img-wrapper">
              <img src={item.image} alt={item.title} className="card-img" />
            </div>
            <h3 className="card-title">{item.title}</h3>
          </div>
        ))}
      </div>
      <div className="solar-system-section">
        <div className="solar-left">
          <h2 className="solar-title">HOUSE AUTOMATION
          </h2>
          <h3 className="solar-subtitle">Automate Your House</h3>
        </div>

        <div className="solar-right">
          <p>
            Lift Up your home convenience by incorporating our state-of-the-art home automation solutions in Pakistan. Experience the convenience and security of automated door locks from top brands such as Yale, August, and Samsung, ensuring your home remains safe even when you’re away. Take control of your home’s climate with smart thermostats, allowing you to tailor temperatures remotely and optimize energy consumption. Manage gate access effortlessly using gate control, all controllable from your smartphone.
          </p>
        </div>
      </div>
      <div className="solar-card-section">
        {automation.map((item, index) => (
          <div className="solar-card" key={index}>
            <div className="card-img-wrapper">
              <img src={item.image} alt={item.title} className="card-img" />
            </div>
            <h3 className="card-title">{item.title}</h3>
          </div>
        ))}
      </div>
         <div className="help-section">
  <h2>Have Questions? We are Here to Help You!</h2>
  <Link to="/contact" className="help-button">Click here</Link>
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
  )
}

export default Residential;
