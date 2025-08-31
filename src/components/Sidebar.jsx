import React from 'react';

export default function Sidebar({ categories, activeCategory, onSelect }) {
  return (
    <aside className="w-full md:w-1/4 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => onSelect(cat)}
              className={`w-full text-left px-3 py-2 rounded-md mb-1 font-medium ${
                activeCategory === cat
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-blue-100 text-gray-700'
              }`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
