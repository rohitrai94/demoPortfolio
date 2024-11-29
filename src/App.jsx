import React from "react";
import MyNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <MyNavbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;
