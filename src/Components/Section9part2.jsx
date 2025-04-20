import React from 'react';

function Section9part2() {
  const cards = [
    {
      subheading: "1. CHOOSE A TEMPLATE",
      heading: "Ready-Made Designs",
      description:
        "Select from 300+ ready-to-use templates or let the AI website builder craft the perfect site for you. Get a professionally built WordPress website in minutes by exploring our comprehensive library of pre-designed templates for any project.",
      image: "https://cdn.shortpixel.ai/spai/w_600+q_lossless+ret_img+to_webp/wpastra.com/wp-content/uploads/2024/08/Ready-Made-Designs-For-You-New.png",
    },
    {
      subheading: "2. CUSTOMIZE YOUR WEBSITE",
      heading: "Make It Uniquely Yours",
      description:
        "Personalize your website with ease using our intuitive website builder. Adjust colors, fonts, and layouts to match your style—no coding required. Tailor every detail to create a site that reflects your vision. With global settings, you can apply changes across your entire website in just a few clicks, ensuring a consistent look and feel throughout.",
      image: "https://cdn.shortpixel.ai/spai/w_978+q_lossless+ret_img+to_webp/wpastra.com/wp-content/uploads/2024/08/Crafting-Visual-Identity-New.png",
    },
    {
      subheading: "3. PUBLISH YOUR WEBSITE",
      heading: "Go Live with Just a Few Clicks",
      description:
        "Once you’re satisfied with your design, it’s time to share your website with the world! Simply hit Publish and your site will be live for visitors to explore. With Astra’s fast-loading performance and mobile-friendly design, your website will provide a seamless experience for users on any device, right from day one.",
      image: "https://cdn.shortpixel.ai/spai/w_978+q_lossless+ret_img+to_webp/wpastra.com/wp-content/uploads/2024/08/Perfecting-Your-Template-New.png",
    },
  ];

  return (
    <section className="section9-wrapper">
      <div className='text-center text-4xl text-charcoal font-semibold p-20' ><h2>Create Your Own Website for Free</h2>
      <p className='text-base'>You Are Just 3 Steps Away From Your New Website!</p></div>
      <div className="section9-card-wrapper">
        {cards.map((card, index) => (
          <div
            className={`section9-card section9-card${index + 1}`}
            key={index}
            style={{ zIndex: index + 1 }}
          >
            <div className="section9-inner">
              <div className="section9-image">
                <img src={card.image} alt={card.heading} />
              </div>
              <div className="section9-content text-left" >
                <p className="section9-subheading">{card.subheading}</p>
                <h2 className="section9-heading">{card.heading}</h2>
                <p className="section9-description">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section9part2;
