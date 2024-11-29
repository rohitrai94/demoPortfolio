import React from "react";
// import "./Footer.css"; // Footer ke styles ke liye

const Footer = () => {
  return (
    <footer className="footer">
  <p>© 2024 Rohit's Portfolio</p>
  <p>
    Follow me:
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-twitter"></i>
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-linkedin"></i>
    </a>
    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-github"></i>
    </a>
  </p>
</footer>
  );
};

export default Footer;
