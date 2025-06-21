import React from 'react';
import "./Longi.css";
import dataSheet from "../../assets/longi1.pdf";
import warrantyTerms from "../../assets/longi2.pdf";

import panel1 from "../../assets/longisolar.jpg";

const LongiSolar = () => {
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
            <h2>Longi Hi-MO 6 - 560 ~ 580 Watt</h2>
            <div className="longi-button-group">
              <a href={dataSheet} target="_blank" rel="noopener noreferrer">
                <button> Data Sheet</button>
              </a>
              <a href={warrantyTerms} target="_blank" rel="noopener noreferrer">
                <button> Warranty Terms</button>
              </a>
              <a href="https://en.longi-solar.com/home/Verification/" target="_blank" rel="noopener noreferrer">
                <button> Module Authenticity</button>
              </a>
            </div>

            <ul>
              <li>Better energy generation performance</li>
              <li>15 year warranty for materials and processing</li>
              <li>25 year warranty for extra linear power output</li>
              <li>22.5% max module efficiency</li>
              <li>0~3 power tolerance</li>
              <li>&lt;1.5% power degradation</li>
              <li>Weight: 27.2 kg</li>
              <li>Dimension: 2278x1134x30mm</li>
            </ul>
          </div>
        </div>

        <div className="head-con">
          <h1 className="head">Longi Solar Panels Latest Prices in Pakistan 2024 :</h1>
          <p>
            At <strong>Up SkySolar</strong>, we understand the significance of solar panels in your energy journey.
            We offer an extensive array of solar panels, including monocrystalline, polycrystalline, bifacial panels,
            and N-type, ensuring that you have the freedom to choose the best fit for your requirements. Our selection
            includes Longi Solar Panels, renowned for their exceptional efficiency, durability, and outstanding performance.
            With a focus on innovation and sustainability, Longi is a leading name in the global solar industry.
            <br /><br />
            Solar energy is not just about reducing your electricity bills; it’s about making a positive impact on the environment.
            <strong> Up SkySolar</strong> is here to guide you on your journey to clean and green energy. Our tier 1 solar panels and
            advanced solar technologies ensure you get the best quality and performance for your solar system.
            <br /><br />
            Longi’s <strong>540W, 545W, and 550W (Hi-MO 5, Hi-MO 6, Hi-MO 7) solar panels are among the most sought-after options in Pakistan.</strong>
            These high-wattage panels are not only efficient but also built to withstand the local climate conditions. The 540W Longi
            solar panel price in Pakistan, along with the 550W, 585W, and 620W options, is competitive, making it an attractive choice
            for those looking to invest in sustainable energy solutions.
            <br /><br />
            For those with smaller-scale requirements, Longi also provides a variety of lower wattage options, ranging from 100 watts
            to 300 watts. The 100W, 200W, and 250W solar panels, with their reasonable prices, are ideal for residential setups and smaller businesses.
            <br /><br />
            To complete your solar system, you’ll need an inverter that matches your energy needs. Longi offers a 10kW hybrid inverter,
            along with a 3KVA inverter, ensuring that your energy conversion is as efficient as possible.
            <br /><br />
            In summary, Longi’s extensive range of solar panels and inverters in Pakistan allows for a customized and cost-effective
            approach to harnessing the power of the sun. With <strong>Up SkySolar</strong>, you can embark on your journey towards a
            sustainable and environmentally friendly energy solution tailored to your specific needs.
          </p>
        </div>

        <div className="head-con">
          <h1 className="head">Longi Solar Panels Dealer in Pakistan :</h1>
          <p>
            In the era of renewable energy, <strong>solar panels</strong> have become the cornerstone of a sustainable and eco-friendly future.
            When it comes to powering homes and businesses in Pakistan, a <strong>10kW solar system</strong> is a popular choice, offering a substantial energy generation capacity.
            To optimize this system, it’s crucial to consider the <strong>quality and efficiency</strong> of solar panels.
            <strong>Longi</strong>, a renowned name in the solar industry, offers a wide range of panels to suit varying energy needs.
            <br /><br />

            To make solar energy even more accessible, we offer <strong>solar financing options in Pakistan</strong>,
            enabling you to embark on your solar journey with ease. Our <strong>financing plans</strong> are designed to accommodate various budgets,
            so you can transition to clean and renewable energy <strong>without breaking the bank</strong>.
            <br /><br />

            <strong>Up SkySolar</strong> is also your source for top-rated <strong>solar inverters</strong>, including
            <strong>ONGRID INVERTERS</strong>, <strong>MPPT charge controllers</strong>, and <strong>hybrid inverters</strong>.
            These essential components ensure that your <strong>solar energy system operates at peak efficiency</strong>,
            maximizing your energy production.
            <br /><br />

            Looking for specific products or accessories for your solar setup? <strong>Up SkySolar</strong> provides
            <strong>INSTALLATION SERVICES</strong> and a wide range of components and <strong>FITTING ACCESSORIES</strong>,
            including <strong>MC4 connectors</strong>, <strong>PV modules</strong>, <strong>PWM charge controllers</strong>,
            and <strong>solar panel stands & accessories</strong>.
            <br /><br />

            What sets us apart is our <strong>state-of-the-art, in-house solar repairing lab</strong>, where we meticulously diagnose and fix
            solar panels and systems with unmatched precision. Our team of experts is equipped with the latest technology and tools,
            ensuring that your <strong>solar setup operates at peak efficiency</strong>.
            <br /><br />

            <strong>We are your one-stop shop for all your solar needs.</strong>
          </p>
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

export default LongiSolar;
