import React from 'react'
import Person from './Person'

function Section5() {
  return (
    <>
    {/* Section 5: Testimonial Grid */}
     <div className="text-center mb-8 text-charcoal text-4xl font-semibold m-100">
        <h2 id='test-h'>
        You Get Lightweight & High-performance Websites in Minutes – Zero Coding Required
        </h2></div>
    <section className="testimonial-grid">
        <div className="testimonial-item ">
          <h3>Speed Promise</h3>
          <p>Astra prioritizes performance above all, built to the highest coding standards to ensure your website is loved by visitors and search engines.</p>
        </div>
        <div className="testimonial-item">
          <h3>Design Simplicity</h3>
          <p>Enjoy beautiful, clean layouts that don’t compromise on speed or performance. Easy to modify with no coding required.</p>
        </div>
        <div className="testimonial-item">
          <h3>Beginner Friendly</h3>
          <p>No learning curve. Intuitive drag-and-drop layout to build your site visually in minutes.</p>
        </div>
      </section>
      <Person/>
    </>
  )
}

export default Section5