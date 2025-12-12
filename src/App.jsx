import "./App.css";
import { useState } from "react";
import React from "react";
import { ProductCard } from "./components/ProductCard";
import { SidebarFilters } from "./components/SidebarFilters";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../src/components/footer.jsx";
import PhoneMockup from "../src/components/phonedemo.jsx";
import Muy from "../src/components/1.jsx";

import AboutUs from "./page/about.jsx";
import Home, { Navbar } from "./page/home.jsx";


export default function App() {
  return (
    <div className="App">
       <Navbar />
       <Home 
       />
      <AboutUs />
      <PhoneMockup/>
      <ProductCard />
      <SidebarFilters />
      <Muy/>
      <Footer/>
      
    </div>
  );
}
      
