import React from "react";
import "./Hero.css";
import Navbar from "../../components/Navbar";

const Hero = () => {
  return (
    <header className="hero">
      <section className="container">
        <h1>Support A Causes You Care About</h1>
        <h3>
          At Charity United we believe that all children in the world have the
          right to be cared for and the right to be protected
        </h3>
        <button>join us today</button>
      </section>
    </header>
  );
};

export default Hero;
