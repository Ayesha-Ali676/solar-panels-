import React from 'react'
import"./indus.css"
import onGrid from "../../assets/solar-products.jpg";      // Use ../../ if your assets folder is one level up
import offGrid from "../../assets/solar-products2.jpg";
import hybrid from "../../assets/solar-products3.jpg";
import netMetering from "../../assets/solar-products4.jpg";
import streetLights from "../../assets/solar-products5.jpg";


import CCTVCameras from "../../assets/cctv.jpg";
import AudioVideoIntercom from "../../assets/audio-video.jpg";
import SecurityAlarms from "../../assets/alarm.jpg";
import smart from "../../assets/indus1.jpg";

import indusA from "../../assets/gate.jpg";
import indusB from "../../assets/auto1.jpg";
import indusC from "../../assets/auto2.jpg";
import indusD  from "../../assets/auto3.jpg";
import indusE from "../../assets/auto4.jpg";
import indusF from "../../assets/auto5.jpg";
import indusG from "../../assets/auto6.jpg";
import indusH from "../../assets/auto7.jpg";
import indusI from "../../assets/auto8.jpg";
import indusJ from "../../assets/auto9.jpg";
import indusK from "../../assets/auto10.jpg";
import indusL from "../../assets/auto11.png";


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
  { title: "Smart Biometric", image: smart},

];

const autos = [
  { title: "Gate Automation", image: indusA },
  { title: "Machine Automate", image: indusB },
  { title: "Office Networking", image: indusC },
  { title: "VFD's", image: indusD },
   { title: "UPS & Stablizer", image: indusE },
  { title: "Electric Cable Trays", image: indusF },
  { title: "Attendance Machine", image:indusG},
  { title: "P to P Access", image: indusH },
   { title: "Fire & Security Alarm", image: indusI },
  { title: "CCTV Control Room", image:  indusJ },
  { title: "Electric Generators", image: indusK },
  { title: "Electric fence", image:  indusL },

];
const Industrial = () => {
 return (
     <div className="hero">
       <div className="image-wrapper">
         <img src="/sol.jpg" alt="About" className="img" />
         <div className="overlay"></div>
       </div>
 
       <div className="content">
         <h1>
          Industrial Solutions
         
         </h1>
       </div>
 
       <div className="solar-system-section">
         <div className="solar-left">
           <h2 className="solar-title">SOLAR SYSTEM</h2>
           <h3 className="solar-subtitle">Industrial Solar Plans</h3>
         </div>
 
         <div className="solar-right">
           <p>
             Up SkySolar excels in delivering cost-effective commercial solar solutions tailored to the unique requirements and preferences of businesses. Our proficiency lies in assessing the distinct needs of each commercial entity, analyzing the quality of available solar resources, and providing well-informed recommendations that seamlessly align with our clients’ preferences. Whether businesses are considering on-grid, off-grid, hybrid solar, DC solar, or net metering solutions, we have the expertise to cater to their commercial solar needs.
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
           <h2 className="solar-title">INDUSTRIAL AUTOMATION
           </h2>
           <h3 className="solar-subtitle">Automate Your Work</h3>
         </div>
 
         <div className="solar-right">
           <p>
             Expand your industrial processes with our comprehensive automation solutions, meticulously tailored to suit your unique manufacturing needs. Our state-of-the-art industrial automation systems, featuring cutting-edge technologies and equipment, ensure efficiency and productivity around the clock.
           </p>
         </div>
       </div>
       <div className="solar-card-section">
         {autos.map((item, index) => (
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

export default Industrial