import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="animate__animated animate__fadeInDown">
        <h1>Hello, I'm Rohit!</h1>
        <p>Web Developer | Software Engineer | Tech Enthusiast</p>
        <a href="#projects" className="btn btn-primary animate__animated animate__pulse animate__infinite">
          View My Work
        </a>
      </div>
    </div>
  );
};

export default Hero;
