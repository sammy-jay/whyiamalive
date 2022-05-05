import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div>
        <h3>Navigation</h3>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>

      <div>
        <h3>Address</h3>
        <p>200, A-block, Green road, USA +10 367 267 2678</p>
        <p>contact@whyiamalive.org</p>
      </div>
      <div>
        <h3>Join Us</h3>
        <a>Become a Volunteer</a>
        <a> Become a Donor</a>
      </div>
      <div>
        <h3>Newsletter</h3>
        <input type="text" />
        <button>Sign Up</button>
        <p>Subscribe newsletter to get updates</p>
      </div>
    </footer>
  );
};

export default Footer;
