// src/page/about.jsx
import "../App.css";
import { useState } from "react";
import React from "react";

import { ProductCard } from "../components/ProductCard";
import { SidebarFilters } from "../components/SidebarFilters";

function About() {
  const [selectedTheme, setSelectedTheme] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const themes = [
    { id: 1, name: "BOHO" },
    { id: 2, name: "TRAVEL" },
    { id: 3, name: "COASTAL & TROPICAL" },
    { id: 4, name: "CLASSIC & MODERN" },
    { id: 5, name: "BOTANICAL & FLORAL" },
    { id: 6, name: "NATURE & WOODLAND" },
  ];

  const colors = [
    { id: 1, name: "1.0" },
    { id: 2, name: "2.0" },
    { id: 3, name: "3.0" },
    { id: 4, name: "4.0" },
    { id: 5, name: "5.0" },
  ];

  const products = [
    {
      id: 1,
      title: "CREATIVITE Online Wedding RSVP Page – Collect RSVPs & Track Guests",
      description:
        "A comprehensive online solution for managing wedding RSVPs and guest tracking.",
      price: "KHR153,000.00",
      link: "https://www.studiocreativethings.com/products/online-wedding-rsvp-page",
    },
    {
      id: 2,
      title: "Sofia | Passport Wedding Invitation Digital",
      description:
        "Digital passport-themed wedding invitations with elegant design.",
      price: "KHR88,000.00",
      link: "#",
    },
    {
      id: 3,
      title: "Flora | Rustic Digital Wedding Invitations",
      description:
        "Rustic floral-themed digital wedding invitations with natural elements.",
      price: "KHR88,000.00",
      link: "#",
    },
  ];

  const handleThemeSelect = (id) => {
    setSelectedTheme(id === selectedTheme ? null : id);
  };

  const handleColorSelect = (id) => {
    setSelectedColor(id === selectedColor ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 border-b-4 border-blue-500 pb-3 inline-block">
            Creative Things
          </h1>
        </header>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <SidebarFilters
            themes={themes}
            colors={colors}
            selectedTheme={selectedTheme}
            selectedColor={selectedColor}
            onThemeSelect={handleThemeSelect}
            onColorSelect={handleColorSelect}
          />

          <main className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <a
              href="https://www.studiocreativethings.com/products/online-wedding-rsvp-page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-colors duration-300 shadow-md hover:shadow-lg"
            >
              Chat
            </a>
          </main>
        </div>
      </div>
    </div>
  );
}

export default About;
