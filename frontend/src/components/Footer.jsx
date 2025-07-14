import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h3>TECHTICAL</h3>
        </div>

        <div className="footer-socials">
          <a
            href="https://github.com/Saptarshi-108"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <img src="\assets\github.png" id="github" />
          </a>
          <a
            href="https://www.instagram.com/doodledude_7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
            <img src="\assets\instagram.png" id="instagram" />
          </a>
          <a href="https://mail.google.com/mail/">
            saptarshimandal1.618@gmail.com
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TECHTICAL. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
