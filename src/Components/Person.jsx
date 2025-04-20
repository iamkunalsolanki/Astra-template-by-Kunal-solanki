import React from 'react';

function Person() {
  return (
    <div className="person-wrapper">
      <section className="person-section">
        <div className="person-left">
          <div className="person-card">
            <img
              src="https://cdn.shortpixel.ai/spai/w_1920+q_lossless+ret_img+to_webp/wpastra.com/wp-content/uploads/2024/11/testimonial.png"
              alt="Chris Lema"
              className="person-img"
            />
            <div className="person-overlay">
              <img src="/images/liquidweb-logo.svg" alt="Liquid Web" className="company-logo" />
              <p className="testimonial-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <p className="person-name">Chris Lema</p>
            </div>
          </div>
        </div>

        <div className="person-right">
          <div className="stat">
            <h3>#1</h3>
            <p>Most Popular<br />WordPress & Woo Theme</p>
          </div>
          <div className="stat">
            <h3>1.8M+</h3>
            <p>Websites Trust Astra</p>
          </div>
          <div className="stat">
            <h3>10%</h3>
            <p>of *total WordPress<br />websites</p>
          </div>
          <div className="reviews">
            <img src="/images/wp-logo.svg" alt="WordPress" />
            <p>Based on <strong>1873+ reviews</strong></p>
            <img src="/images/wp-logo.svg" alt="WordPress" />
            <p>Based on <strong>1873+ reviews</strong></p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Person;
