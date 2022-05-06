import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/logo-white.png";
import { BiMenuAltRight } from "react-icons/bi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  window.addEventListener("scroll", () => setIsOpen(false));
  const [changeBg, setChangeBg] = useState(false);
  const handleBg = () => {
    if (window.scrollY >= 50) {
      setChangeBg(true);
    } else {
      setChangeBg(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleBg);

    return () => {
      window.removeEventListener("scroll", handleBg);
    };
  });
  return (
    <nav className="navbar" style={{ backgroundColor: changeBg && " #a70000" }}>
      <img src={logo} alt="logo here" />
      <div className="nav-links1">
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#causes">Causes</a>
        <a href="#contact">Contact</a>
      </div>
      <button>donate now</button>
      <div
        className="menu-btn"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <BiMenuAltRight />
      </div>

      <div className={`nav-links2 ${isOpen ? "isOpen" : "isClosed"}`}>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#causes">Causes</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
