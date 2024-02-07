import React from 'react';
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Main";
import About from "./Components/About/Main";
import Footer from "./Components/Footer";
import Services from "./Components/Services/Main";
import Projects from "./Components/Projects/Main";
import Contact from "./Components/Contact/Main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact-us" element={<Contact />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
