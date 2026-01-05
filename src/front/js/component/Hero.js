import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>"A Business without a Sign is a Sign of no Business"</h1>
        <p>Add your company's tagline, profile its mission, or describe its range of services.</p>
        <div className="buttons">
          <button>Call to Action</button>
          <button>Learn More</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="placeholder-image.png" alt="Hero" />
      </div>
    </section>
  );
};

export default Hero;
