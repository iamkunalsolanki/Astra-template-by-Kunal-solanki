import React from 'react'
import Section2 from './Section2'
import Section4 from './Section4'
function Hero() {
  return (
    <>
    <div className="homepage-wrapper">
    {/* Section 1: Hero Header */}
    <section className="hero-section h-full" >
      <h1 className="hero-title">
        Have a Website in Mind? Let’s Make it Happen…
      </h1>
      <Section2/>
      <Section4/>
      
  <div className="flex items-end justify-center">
    <img
      src="http://localhost/wp-content/uploads/2025/04/astra-home-image-1.webp"
      alt=""
      className="block max-w-full h-auto align-bottom"
    />
  </div>


    </section> </div>
    </>
  )
}

export default Hero