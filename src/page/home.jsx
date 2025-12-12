// src/page/home.jsx
import React, { useState, useEffect } from "react";
import mylogo from "../assets/invitattion_front/logo-web.png";
import Loading from "../components/Loading";
import "../App.css";
import { Link } from "react-router-dom";
import Homepic from "../assets/invitattion_front/homepic.jpg";
import Homepic1 from "../assets/invitattion_front/homepic1.jpg";
import Homepic2 from "../assets/invitattion_front/homepic2.jpg";
import Homepic3 from "../assets/invitattion_front/homepic3.jpg";
import Homepic4 from "../assets/invitattion_front/homepic4.jpg";
import Homepic5 from "../assets/invitattion_front/homepic5.jpg";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  // Toggle functions
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      {/* Top Promotional Banner */}
      <div className="bg-gray-100 text-center py-3 px-4">
        <marquee className="text-xs md:text-sm text-gray-700">
          ENJOY 20% OFF WHEN YOU ORDER 4 OR MORE ITEMS. USE CODE{' '}
          <span className="font-bold">SAYIDO20</span> AT CHECKOUT.
        </marquee>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-sm backdrop-blur-md bg-white/1 shadow-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Hamburger Menu Button */}
            <button
              onClick={toggleMenu}
              className="flex flex-col gap-1.5 p-2 hover:bg-gray-50 rounded transition-colors"
              aria-label="Menu"
            >
              <span className="w-6 h-0.5 bg-gray-800 block"></span>
              <span className="w-6 h-0.5 bg-gray-800 block"></span>
              <span className="w-6 h-0.5 bg-gray-800 block"></span>
            </button>

            {/* Logo */}
            <div className="flex-1 flex justify-center">
              <div className="text-center">
                <img src={mylogo} alt="website logo" className="w-25 h-25" />
              </div>
            </div>

            {/* User Icon with Dropdown */}
            <div className="relative">
              <button
                onClick={toggleUserMenu}
                className="p-2 hover:bg-gray-50 rounded transition-colors"
                aria-label="User Menu"
              >
                <i className="fa-solid fa-lg fa-users"></i>
              </button>

              {/* Dropdown Menu - Shows when user clicks icon */}
              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <Link
                    to="/signin"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <i className="fa-solid fa-user-plus mr-2"></i>
                  Register
                  </Link>
                  <Link
                    to="/login"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => setIsUserMenuOpen(false)}
                  >
                    <i className="fa-solid fa-sign-in-alt mr-2"></i>
                    Login
                  </Link>
                </div>
              )}
            </div>

            {/* Shopping Cart Icon */}
            <button
              className="p-2 hover:bg-gray-50 rounded transition-colors"
              aria-label="Shopping Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Slide-out Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <button className="p-2" aria-label="User Account">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 hover:bg-gray-100 rounded"
              aria-label="Close Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Search Bar */}
          <div className="p-4 border-b">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 pr-10 text-sm border border-gray-300 rounded focus:outline-none focus:border-teal-500"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto">
            <nav className="py-4">
              <MenuItem text="ABOUT US" hasSubmenu />
              <MenuItem text="WEDDING WEBSITE" hasSubmenu submenuItems={[]} />
              <MenuItem text="E-INVITATIONS" hasSubmenu submenuItems={[]} />
              <MenuItem text="CONTACT US" />
              <MenuItem text="PRICING" hasSubmenu submenuItems={[]} />
              <MenuItem text="REVIEWS" />
              <MenuItem text="COSTOMIZE" />
              <MenuItem text="ASKING QUESTION" />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

// Menu Item Component
function MenuItem({ text, hasSubmenu = false, submenuItems = [] }) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    if (hasSubmenu) {
      setIsSubmenuOpen(!isSubmenuOpen);
    }
  };

  return (
    <div>
      <div
        onClick={toggleSubmenu}
        className="px-6 py-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer flex items-center justify-between group"
      >
        <span className="text-sm text-gray-700 uppercase tracking-wide font-medium group-hover:text-teal-600 transition-colors">
          {text}
        </span>
        {hasSubmenu && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 text-gray-400 group-hover:text-teal-600 transition-transform ${
              isSubmenuOpen ? 'rotate-90' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        )}
      </div>

      {/* Submenu Items */}
      {hasSubmenu && isSubmenuOpen && (
        <div className="bg-gray-50">
          {submenuItems.map((item, index) => (
            <div
              key={index}
              className="px-8 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-200"
            >
              <span className="text-xs text-gray-600 uppercase tracking-wide">
                {item}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// HOME COMPONENT
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="pt-52 min-h-screen bg-gray-50 px-4 items-center justify-center flex">
      <header className="grid grid-cols-2 items-center text-center gap-[100px]">
        <div className="mb-20 font-stretch-expanded text-shadow-amber-200 text-lg md:text-2xl lg:text-4xl">
          <p>
            Glad you're here! Design, send, and manage invitations in just a few clicks.
            Create beautiful invitations for any occasion with our easy-to-use platform.
            Customize your design, send it to your guests, and track RSVPs effortlessly.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <img src={Homepic} className="w-40 h-auto rounded" alt="Home pic" />
          <img src={Homepic1} className="w-40 h-auto rounded" alt="Home pic 1" />
          <img src={Homepic2} className="w-40 h-auto rounded" alt="Home pic 2" />
          <img src={Homepic3} className="w-40 h-auto rounded" alt="Home pic 3" />
          <img src={Homepic4} className="w-40 h-auto rounded" alt="Home pic 4" />
          <img src={Homepic5} className="w-40 h-auto rounded" alt="Home pic 5" />
        </div>
      </header>
    </div>
  );
}