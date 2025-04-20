// Section2.jsx
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const firstRow = [
  { icon: 'fas fa-building', label: 'Business & Services' },
  { icon: 'fas fa-store', label: 'Online Store' },
  { icon: 'fas fa-image', label: 'Portfolio' },
  { icon: 'fab fa-simplybuilt', label: 'Corporations & Organizations' },
  { icon: 'fab fa-simplybuilt', label: 'Corporations & Organizations' }
];

const secondRow = [
  { icon: 'fas fa-user-tie', label: 'Consultant' },
  { icon: 'fas fa-blog', label: 'Blog' },
  { icon: 'fas fa-file-alt', label: 'One Page' },
  { icon: 'fas fa-utensils', label: 'Food & Restaurants' },
  { icon: 'fas fa-calendar-alt', label: 'Events' }
];

const Section2 = () => {
  return (
    <div className="p-4 space-y-4">
      {/* First Row */}
      <div className="flex flex-wrap justify-center gap-4">
        {firstRow.map((cat, index) => (
          <button
            key={index}
            className="flex items-center gap-2 px-4 py-2 text-white rounded-lg transition"
            style={{ backgroundColor: '#5A2AC7' }}
          >
            <i className={cat.icon}></i> {cat.label}
          </button>
        ))}
      </div>

      {/* Second Row */}
      <div className="flex flex-wrap justify-center gap-4">
        {secondRow.map((cat, index) => (
          <button
            key={index}
            className="flex items-center gap-2 px-4 py-2 text-white rounded-lg transition"
            style={{ backgroundColor: '#5A2AC7' }}
          >
            <i className={cat.icon}></i> {cat.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Section2;