import React from 'react';
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Main";
import About from "./Pages/About/Main";
import Footer from "./Components/Footer";
import Services from "./Pages/Services/Main";
import Projects from "./Pages/Projects/Main";
import Contact from "./Pages/Contact/Main";

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
