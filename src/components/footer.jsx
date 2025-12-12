// src/components/footer.jsx
import React from "react";

// Make sure to import your images
import c1 from "../assets/invitattion_front/c1.png";
import c2 from "../assets/invitattion_front/c2.png";
import c3 from "../assets/invitattion_front/c3.png";
import c4 from "../assets/invitattion_front/c4.png";
import c5 from "../assets/invitattion_front/c5.png";
import c6 from "../assets/invitattion_front/c6.png";
import c7 from "../assets/invitattion_front/c7.png";
import c8 from "../assets/invitattion_front/c8.png";

export default function Footer() {
  return (
    <>
      <footer className="bg-white w-full py-10 mt-auto shadow-inner">
        {/* Image row */}
        <div className="flex justify-center flex-wrap gap-4 p-4">
          {[c1, c2, c3, c4, c5, c6, c7, c8].map((img, index) => (
            <img key={index} src={img} alt={`template ${index + 1}`} className="w-20" />
          ))}
        </div>

        {/* Footer left */}
        <div className="text-center mt-10">
          <h2 className="text-2xl font-bold">
            UI<span className="text-pink-500">verse</span>
          </h2>
          <p className="text-sm text-gray-500 mt-1">Uiverse | The universe of UI</p>

          <div className="mt-4 text-gray-600 text-sm">
            <p className="font-semibold">⚖️ MIT License</p>
            <p>
              All content on this site is published under the{" "}
              <a href="#" className="text-blue-500 underline">MIT License</a>.
            </p>
          </div>

          {/* Socials */}
          <div className="flex justify-center gap-6 text-2xl text-gray-700 mt-4">
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-discord"></i>
          </div>
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 text-center">
          <div>
            <h4 className="font-semibold">Games</h4>
            <a href="#" className="block text-gray-600">Azeron.ai</a>
            <a href="#" className="block text-gray-600">Tavernia.io</a>
          </div>

          <div>
            <h4 className="font-semibold">Resources</h4>
            <a href="#" className="block text-gray-600">Pixelrepo.com</a>
            <a href="#" className="block text-gray-600">Cssbuttons.io</a>
            <a href="#" className="block text-gray-600">Neumorphism.io</a>
            <a href="#" className="block text-gray-600">Browsergames.gg</a>
          </div>

          <div>
            <h4 className="font-semibold">Information</h4>
            <a href="#" className="block text-gray-600">Blog</a>
            <a href="#" className="block text-gray-600">Post Guidelines</a>
            <a href="#" className="block text-gray-600">Give feedback</a>
            <a href="#" className="block text-gray-600">Report bug</a>
          </div>

          <div>
            <h4 className="font-semibold">Legal</h4>
            <a href="#" className="block text-gray-600">Terms</a>
            <a href="#" className="block text-gray-600">Privacy policy</a>
            <a href="#" className="block text-gray-600">Cookie policy</a>
            <a href="#" className="block text-gray-600">Disclaimer</a>
          </div>
        </div>
      </footer>

      <div className="text-center py-4 text-sm text-gray-600">
        © 2025 Pixel Galaxies. All rights reserved. — Uiverse.io
      </div>
    </>
  );
}
