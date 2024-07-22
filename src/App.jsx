import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import AboutUs from './components/About';
import ContactUs from './components/Contact';
import Product from './components/Product';
import PreBook from './components/PreBook';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/product/:name" element={<Product />} />
        <Route path="/pre-book" element={<PreBook />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
