
// src/components/1.jsx
import React from "react";

export function SidebarFilters({
  themes = [],
  colors = [],
  selectedTheme,
  selectedColor,
  onThemeSelect = () => {},
  onColorSelect = () => {},
}) {
  return (
    <div className="bg-red-600 rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Filters</h2>

      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Theme</h3>
        <ul className="space-y-2">
          {themes.map((t) => (
            <li key={t.id}>
              <button
                onClick={() => onThemeSelect(t.id)}
                className={`w-full text-left p-2 rounded-lg ${{
                  true: "bg-blue-50 text-blue-600",
                }[selectedTheme === t.id] || "text-gray-600"}`}
              >
                {t.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-2">Colour</h3>
        <ul className="space-y-2">
          {colors.map((c) => (
            <li key={c.id}>
              <button
                onClick={() => onColorSelect(c.id)}
                className={`w-full text-left p-2 rounded-lg ${{
                  true: "bg-blue-50 text-blue-600",
                }[selectedColor === c.id] || "text-gray-600"}`}
              >
                {c.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
