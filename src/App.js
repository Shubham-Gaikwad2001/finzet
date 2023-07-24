// import logo from "./assets/imgs/logo.png";
import "./App.css";

import React from "react";
import Navbar from "./components/inc/Navbar";
import Home from "./components/pages/Home";
import Contactus from "./components/pages/Contact";
import Aboutus from "./components/pages/About";
import Footer from "./components/inc/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./components/pages/Product";
import Homeloan from "./components/pages/Homeloan";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/product" element={<Product />} />
        </Routes>
          <Homeloan />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
