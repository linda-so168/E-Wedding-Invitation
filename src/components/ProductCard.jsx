// src/components/1.jsx
import React from "react";

export function ProductCard({ product }) {
  if (!product) {
    return (
      <div className="bg-white rounded-xl shadow-sm p-6">
        <p className="text-gray-600">No product provided</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 min-h-[3rem]">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-red-500">{product.price}</span>
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 font-medium text-sm"
          >
            View Details →
          </a>
        </div>
      </div>
    </div>
  );
}
