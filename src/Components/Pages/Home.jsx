
import React, { useRef, useEffect } from "react";
import "./Home.css";

const Home = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(
        " .card, .about-text .slide-up"
      );
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          el.classList.add("reveal");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const animateHeading = () => {
    const heading = headingRef.current;
    if (heading) {
      heading.classList.add("clicked");
      setTimeout(() => heading.classList.remove("clicked"), 600);
    }
  };


  return (
    <div className="hero-section">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/solar-video2.mp4" type="video/mp4" />
      </video>

      <div className="hero-content">
        <p>ULTIMATE SMART LIVING</p>
        <h1 ref={headingRef} onClick={animateHeading}>
          Up SkySolar <br />
          DON'T LET ENERGY BILLS DRAIN YOUR SAVING!
        </h1>
        <p className="subtext">
          Combining the best of solar thermal & photovoltaic to provide efficient
          source of heat & power from minimal space. <br />
          We deal in all kinds of solar solutions for Commercial and Industrial Sectors.
        </p>
      </div>

      <div className="main">
        <h1 className="heading" onClick={animateHeading}>
          We Provide in Demand Products & Services <br />
          <span className="center-line">for Solar Smart Solutions</span>
        </h1>
      </div>

      {/* Cards */}
      <div className="card-container">
        <div className="card">
          <img src="/plc.jpg" alt="Solar" />
          <div className="icon-box">
            <div className="icon-inner">
              <i className="fas fa-sun"></i>
            </div>
          </div>
          <h3>PLC & SCADA</h3>
          <p>Comprehensive PLC and SCADA services for industries, offering automation, monitoring, and control solutions to enhance productivity and efficiency.</p>
        </div>

        {/* Add other cards like above with unique icons */}
        <div className="card">
          <img src="/wind.jpg" alt="Solar" />
          <div className="icon-box">
            <div className="icon-inner">
              <i className="fas fa-sun"></i>
            </div>
          </div>
          <h3>Complete Solar Systems</h3>
          <p>Electro Tech is a one stop solar system solution deals in all kinds of solar systems, Solar Panels and Solar street lights</p>
        </div>
        <div className="card">
          <img src="/vfd.jpg" alt="Solar" />
          <div className="icon-box">
            <div className="icon-inner">
              <i className="fas fa-sun"></i>
            </div>
          </div>
          <h3>Inverters (VFD)</h3>
          <p>Electro Tech deals in solar interters, VFD interters and batteries of all types used and new.</p>
        </div>
        <div className="card">
          <img src="/water.jpg" alt="Solar" />
          <div className="icon-box">
            <div className="icon-inner">
              <i className="fas fa-sun"></i>
            </div>
          </div>
          <h3>ET Virtu Water Heating</h3>
          <p>Combines solar thermal and photovoltaic to provide heat and power from minimal space, ideally suited to commercial and industrial needs.</p>
        </div>
        <div className="card">
          <img src="/mac.jpg" alt="Solar" />
          <div className="icon-box">
            <div className="icon-inner">
              <i className="fas fa-sun"></i>
            </div>
          </div>
          <h3>Machine Automation</h3>
          <p>ELECTRO TECH provides solutions for Machine Automation. We are specialized in automation for all types of machinery related to Factory Automation Sector.</p>
        </div>
        <div className="card">
          <img src="/ups.jpg" alt="Solar" />
          <div className="icon-box">
            <div className="icon-inner">
              <i className="fas fa-sun"></i>
            </div>
          </div>
          <h3>Generators, UPS / Motor Stabilizer & Batteries</h3>
          <p>Automatic voltage stabilizer regulator 380V (1000kva, 1200kva, 1500kva 1800kva, 2000kva), control and automatic control, freely switch</p>
        </div>


      </div>

      {/* About Us Scroll Section */}
      <div className="about-us-section">
        <div className="about-us-container">
          <div className="about-images">
            <img
              src="/solar-plants.jpg"
              alt="Solar Plant"
              className="main-image"
            />
            <img
              src="/solar-team.jpg"
              alt="Solar Team"
              className="overlay-image"
            />
          </div>
          <div className="about-text reveal">
            <h2>
              We Have 18 Years Of Experience <br /> in Solar Systems
            </h2>
            <p>
              Electro Tech is a one stop solar system solution that facilitates you generate
              environment-friendly green energy. We deal in all kinds of solar panels,
              inverters, electric panels, batteries, and generators since 2006.
            </p>

            <div className="features">
              <div className="feature">
                <i className="fas fa-sliders-h icon"></i>
                <div>
                  <h4 className="slide-up">Customized Solar Solutions</h4>
                  <p>
                    Panels, inverters, generators, cables for residential, commercial, and industrial clients.
                  </p>
                </div>
              </div>
              <div className="feature">
                <i className="fas fa-users icon"></i>
                <div>
                  <h4 className="slide-up">Team of Dedicated Professionals</h4>
                  <p>
                    A professional qualified & equipped team catering customers from pre-installation estimates to after sale support and maintenance services.
                  </p>
                </div>
              </div>
            </div>
            <button className="learn-more-btn">Learn More</button>
          </div>
        </div>
      </div>
      <div className="blue-bar">
        <div className="head">
          <h2>Why Switch to Solar Energy</h2>
        </div>
        <div className="benefit-boxes">
          <div className="benefit">
            <i className="fas fa-calculator"></i>
            <p>Reduces Electricity Bills</p>
          </div>
          <div className="benefit">
            <i className="fas fa-sliders-h"></i>
            <p>Low Operating Costs</p>
          </div>
          <div className="benefit">
            <i className="fas fa-recycle"></i>
            <p>Renewable and Sustainable</p>
          </div>
          <div className="benefit">
            <i className="fas fa-lightbulb"></i>
            <p>Energy Independence</p>
          </div>
        </div>
      </div>
      <div className="big-card">
        <div className="card-s">
          <h1>SOLAR PANELS</h1>
          <h2>We Deal In</h2>
          <div className="pics">
            <img src="/jinko.png" alt="" />
            <img src="/longi.png" alt="" />
            <img src="/ja.png" alt="" />
            <img src="/jinko.png" alt="" />
            <img src="/phono.png" alt="" />
            <img src="/trina.png" alt="" />
          </div>
        </div>
        <div className="card-s">
          <h1>INVERTERS</h1>
          <h2>We Deal In</h2>
          <div className="pics">
            <img src="/saj.png" alt="" />
            <img src="/hau.png" alt="" />
            <img src="/solis.png" alt="" />
            <img src="/sun.png" alt="" />
            <img src="/growatt.png" alt="" />
            <img src="/knox.png" alt="" />
            <img src="/fox.png" alt="" />
            <img src="/hopewind.png" alt="" />
          </div>
        </div>
      </div>
      <div className="testimonial-section">
        <div className="overlay"></div>

        <div className="testimonial-content">
          <div className="testimonial-image">
            <img src="/umer.jpg" alt="CEO" className="profile-img" />
          </div>

          <div className="testimonial-text">
            <div className="quote-mark">“</div>
            <p className="quote">
              The future demands action — and at <strong>Up Sky Solar</strong>, we’re answering with purpose. We believe that innovation and responsibility go hand in hand. Our mission is to empower communities with clean, reliable energy while streamlining lives through intelligent automation. Every solar panel we install is a step toward a healthier planet and a smarter future. We’re honored by your trust in our vision. Together, we’re not just reducing emissions — we’re raising standards for what sustainability can look like.
            </p>
            <p className="author">UMER AFZAL</p>
            <p className="designation">CEO Up Sky Solar</p>
          </div>
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

    </div>


  );
};

export default Home;



