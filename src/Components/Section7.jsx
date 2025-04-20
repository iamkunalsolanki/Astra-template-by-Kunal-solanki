import React from 'react';
import Section7part2 from './Section7part2';

function Section7() {
  const imageUrls = [
    "http://localhost/wp-content/uploads/2025/04/For-Web-Pros-New.png",
    "http://localhost/wp-content/uploads/2025/04/For-Bloggers-New.png",
    "http://localhost/wp-content/uploads/2025/04/For-Online-Stores-New.png",
    "http://localhost/wp-content/uploads/2025/04/T-12-Burgur-Restaurant-Template.png",
    "http://localhost/wp-content/uploads/2025/04/T-13-Fashion-Template.png",
    "http://localhost/wp-content/uploads/2025/04/T-8-Modern-Ecommerce-Template-300x213-1.png",
  ];

  // Duplicate images to make infinite scroll loop
  const duplicatedImages = [...imageUrls, ...imageUrls];

  return (
    <section className="template-showcase w-screen" >
      <div className="text-center mb-8">
        <h2 className="template-heading">
          Largest Library of Pre-built Websites
        </h2>
        <p className="template-sub">
          Full Website Templates For Every Niche + One-Click Importer
        </p>
      </div>

      <div className="slider-track">
        {duplicatedImages.map((imageUrl, i) => (
          <a
            href="#"
            key={i}
            className="slider-item"
          >
            <img
              src={imageUrl}
              alt={`Template ${i + 1}`}
            />
            <div className="hover-overlay">Preview</div>
          </a>
        ))}
      </div>
      <Section7part2/>
    </section>
  );
}

export default Section7;
