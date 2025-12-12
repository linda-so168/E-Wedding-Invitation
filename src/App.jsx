// src/App.jsx
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from "react";
import { ProductCard } from "./components/ProductCard";
import { SidebarFilters } from "./components/SidebarFilters";
import Footer from "../src/components/footer.jsx";
import PhoneMockup from "../src/components/phonedemo.jsx";
import Muy from "../src/components/1.jsx";

import AboutUs from "./page/about.jsx";
import Home, { Navbar } from "./page/home.jsx";
import SignIn from "./page/signin.jsx";
import Login from "./page/login.jsx";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Main Home Route - includes all components */}
          <Route 
            path="/" 
            element={
              <>
                <Navbar />
                <Home />
                <AboutUs />
                <PhoneMockup />
                <ProductCard />
                <SidebarFilters />
                <Muy />
                <Footer />
              </>
            } 
          />
          
          {/* Sign In Route - separate page */}
          <Route path="/signin" element={<SignIn />} />
          
          {/* Login Route - separate page */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}