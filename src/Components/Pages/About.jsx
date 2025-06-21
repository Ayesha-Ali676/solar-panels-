// import React from "react";
// import "./About.css";

// const About = () => {
//   return (
//     <div className="hero">
//       <div className="image-wrapper">
//         <img src="/about.jpg" alt="About" className="hero-img" />
//         <div className="overlay"></div>
//       </div>

//       <div className="content">
//         <h1>
//            <br />
//           WHO WE ARE ?
//         </h1>
//       </div>
//       <div className="company-section">
//         <div className="left-column">
//           <div className="badge"> <h1>UP SKYSOLAR </h1></div>
//           <h1 className="headline">
//             Your go-to destination for all <br /> inclusive solar system solutions
//           </h1>
//           <p className="description">
//             <span style={{ color: "#003366", fontWeight: "bold" }}>Up</span>
//             <span style={{ color: "#FFA500", fontWeight: "bold" }}> SkySolar</span>{' '}
//             delivers innovative, affordable, and client-focused solar, electric, and electronic solutions.
//             Our expert team carefully assesses your business needs, evaluates global resources, and provides
//             tailored, intelligent recommendations—ensuring the most efficient and sustainable energy choices
//             for every customer.
//           </p>
//         </div>
//         <div className="bottom-row">
//           <div className="image-container">
//             <img src="/about1.jpg" alt="Company Building" className="company-img" />
//           </div>

//           <div className="text-column">
//             <h2 className="subheading">Company Introduction</h2>
//             <p>
//               Up SkySolar was founded by Umer Afzal with a vision to transform Pakistan’s energy future through smart, sustainable solar solutions.
//             </p>
//             <p>
//               The company delivers advanced solar technologies alongside expert import, distribution, and after-sales support.Up SkySolar serves clients across various cities and industries, offering customized solutions for homes, businesses, and institutions.
//             </p>
//             <p>
//               The company is trusted for its transparency, innovation, and long-term commitment to clean energy.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
import React from "react";
import "./About.css";
import { FaWallet, FaLeaf, FaTools, FaUsers, FaSolarPanel, FaCogs, FaBolt, FaWrench, FaMoneyBillWave } from "react-icons/fa";
import { Link } from "react-router-dom";
const features = [
  {
    icon: <FaWallet />,
    title: "Easy Payment",
    desc: "Up SkySolar offers customers easy installment plans for purchasing solar packages.",
  },
  {
    icon: <FaLeaf />,
    title: "Eco Energy",
    desc: "We deliver clean, renewable solar energy that helps protect the environment.",
  },
  {
    icon: <FaTools />,
    title: "Low Maintenance",
    desc: "Our solar systems need only minimal periodic cleaning to stay efficient.",
  },
  {
    icon: <FaUsers />,
    title: "Supportive Team",
    desc: "Our solution-oriented team ensures top-tier after-sale service and support.",
  },
  {
    icon: <FaSolarPanel />,
    title: "AEBD Certified",
    desc: "We are AEBD certified for on-grid, off-grid, and hybrid solar system installations.",
  },
  {
    icon: <FaCogs />,
    title: "Customized Fix",
    desc: "We tailor solutions from assessment to installation, maintenance, and repair.",
  },
  {
    icon: <FaBolt />,
    title: "Net Metering",
    desc: "We help you reduce energy bills with efficient net metering setups.",
  },
  {
    icon: <FaWrench />,
    title: "Repair & Services",
    desc: "Our expert team ensures smooth operation with in-house testing and support.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Tax Benefit",
    desc: "We help clients get tax incentives, maximizing returns on solar investments.",
  },
];

const About = () => {
  return (
    <div className="hero">
      <div className="image-wrapper">
        <img src="/about.jpg" alt="About" className="hero-img" />
        <div className="overlay"></div>
      </div>

      <div className="content">
        <h1>

          WHO WE ARE ?
        </h1>
      </div>
      <div className="company-section">
        <div className="left-column">
          <div className="badge"> <h1>UP SKYSOLAR </h1></div>
          <h1 className="headline">
            Your go-to destination for all <br /> inclusive solar system solutions
          </h1>
          <p className="description">
            <span style={{ color: "#003366", fontWeight: "bold" }}>Up</span>
            <span style={{ color: "#FFA500", fontWeight: "bold" }}> SkySolar</span>{' '}
            delivers innovative, affordable, and client-focused solar, electric, and electronic solutions.
            Our expert team carefully assesses your business needs, evaluates global resources, and provides
            tailored, intelligent recommendations—ensuring the most efficient and sustainable energy choices
            for every customer.
          </p>
        </div>
        <div className="bottom-row">
          <div className="image-container">
            <img src="/about1.jpg" alt="Company Building" className="company-img" />
          </div>

          <div className="text-column">
            <h2 className="subheading">Company Introduction</h2>
            <p>
              Up SkySolar was founded by Umer Afzal with a vision to transform Pakistan’s energy future through smart, sustainable solar solutions.
            </p>
            <p>
              The company delivers advanced solar technologies alongside expert import, distribution, and after-sales support. Up SkySolar serves clients across various cities and industries, offering customized solutions for homes, businesses, and institutions.
            </p>
            <p>
              The company is trusted for its transparency, innovation, and long-term commitment to clean energy.
            </p>
          </div>

          {/* ✅ Why Choose Us Section */}
          <div className="why-choose-section">
            <h2 className="section-title">Why Choose <span>Up SkySolar</span></h2>
            <div className="features-grid">
              {features.map((item, index) => (
                <div className="feature-card" key={index}>
                  <div className="icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

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
  );
};

export default About;
