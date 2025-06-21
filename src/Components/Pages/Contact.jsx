import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/quote", formData);
      setSubmitted(true);
    } catch (error) {
      console.error("Submission failed", error);
    }
  };

  return (
    <>
    <div className="quote-container">
      <h2 className="quote-title">For Quote & Estimation</h2>
      {submitted ? (
        <p className="quote-success">Thank you! We’ll contact you shortly.</p>
      ) : (
        <form onSubmit={handleSubmit} className="quote-form">
          <input type="text" name="firstName" placeholder="First Name *" required onChange={handleChange} />
          <input type="text" name="lastName" placeholder="Last Name *" required onChange={handleChange} />
          <input type="email" name="email" placeholder="E-mail *" required onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Phone *" required onChange={handleChange} />
          <textarea name="message" placeholder="Text here..." rows="4" onChange={handleChange}></textarea>
          <button type="submit">Submit</button>
        </form>
      )}
     
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

export default QuoteForm;
