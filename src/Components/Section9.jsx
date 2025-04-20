import React from 'react';// External CSS file (see below)

function Section9() {
  const cards = [
    { title: "Live Website Changes", description: "Simplify your design process by eliminating constant previews, making real-time changes effortlessly. Collaborate seamlessly and instantly visualize your website’s updates as you create.", image: "https://cdn.shortpixel.ai/spai/w_972+q_lossless+ret_img+to_webp/wpastra.com/wp-content/uploads/2024/10/Live-Editing.png" },
    { title: "Global Settings Options", description: "Effortlessly customize your website with One-Click Styling for Colors & Fonts, allowing you to manage color schemes from a single place and make site-wide changes with ease. Streamline your workflow and ensure consistency across your site with simplified controls and instant updates.", image: "https://cdn.shortpixel.ai/spai/w_972+q_lossless+ret_img+to_webp/wpastra.com/wp-content/uploads/2024/10/Global-Settings-Options.png" },
    { title: "Beautiful Post Layouts", description: "Create visually appealing designs with eye-catching layouts and customizable templates tailored to your brand. Enhance user experience with reader-friendly features that ensure easy navigation and readability. All content is optimized for SEO, boosting visibility and engagement across search engines.", image: "https://cdn.shortpixel.ai/spai/w_972+q_lossless+ret_img+to_webp/wpastra.com/wp-content/uploads/2024/10/Beautiful-Post-Layouts.png" },
    { title: "Sleek, Functional Headers", description: "Creating a captivating website requires Attention-Grabbing Headers that engage visitors instantly. User-friendly Menus ensure effortless navigation, making it easy to find information. Versatile Layouts offer flexibility for content presentation, catering to different needs and preferences. With Responsive Headers, your site remains visually appealing and functional across all devices, providing an optimal user experience.", image: "https://cdn.shortpixel.ai/spai/w_972+q_lossless+ret_img+to_webp/wpastra.com/wp-content/uploads/2024/10/Sleek-Functional-Headers.png" },
    { title: "Professional Footer Builder", description: "Achieve a cohesive website with consistent design elements, prominently displayed important information, and a personalized footer. Use compelling Call-to-Action buttons to boost engagement, and leverage a professional footer builder for a polished finish.", image: "https://cdn.shortpixel.ai/spai/w_972+q_lossless+ret_img+to_webp/wpastra.com/wp-content/uploads/2024/10/Professional-Footer-Builder.png" },
    { title: "Colors & Typography", description: "Unlock your website’s potential with an extensive color palette and customizable fonts, sizes, and styles. Choose from a wide range of Google Fonts and see changes live before publishing. Enjoy the freedom to fully personalize your site’s look and feel with vibrant colors and unique typography.", image: "https://cdn.shortpixel.ai/spai/w_972+q_lossless+ret_img+to_webp/wpastra.com/wp-content/uploads/2024/10/Colors-Typography.png" },
    { title: "Customizable Mega Menus", description: "Unlock your website’s potential with an extensive color palette and customizable fonts, sizes, and styles. Choose from a wide range of Google Fonts and see changes live before publishing. Enjoy the freedom to fully personalize your site’s look and feel with vibrant colors and unique typography.", image: "https://cdn.shortpixel.ai/spai/w_972+q_lossless+ret_img+to_webp/wpastra.com/wp-content/uploads/2024/10/Customizable-Mega-Menus.png" },
    { title: "Multiple Layout Options", description: "Choose from multiple layout options, including structured and dynamic designs, with customizable grid and column layouts. Our responsive design ensures a seamless experience on any device, allowing you to create tailored page structures that enhance your digital presence.", image: "https://cdn.shortpixel.ai/spai/w_972+q_lossless+ret_img+to_webp/wpastra.com/wp-content/uploads/2024/10/Multiple-Layout-Options.png" },
    { title: "Build Powerful Online Stores", description: "Create customizable product pages and flexible shop layouts to showcase your offerings. Enjoy a hassle-free checkout process and advanced e-commerce features that make collecting payments easy. Build powerful online stores that enhance customer experience and drive sales effortlessly. Transform your retail presence today!", image: "https://cdn.shortpixel.ai/spai/w_972+q_lossless+ret_img+to_webp/wpastra.com/wp-content/uploads/2024/10/Build-Powerful-Online-Stores.png" },
  ];

  return (
    <section className="all-cards">
      {cards.map((card, index) => (
        <div className={`card card${index + 1}`} key={index} style={{ zIndex: index + 1 }}>
          <div className="card-inner">
            <div className="card-content">
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </div>
            <img src={card.image} alt={card.title} />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Section9;
