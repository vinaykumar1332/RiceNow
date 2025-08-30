// HomePage.jsx
import React from 'react';
import Hero from '../homepage/Hero/Hero';  // adjust path to where Hero.jsx is saved
import './homepage.css'; // optional if you want extra page styles

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Full-width Hero Slider */}
      <Hero />

      {/* Add more homepage sections below */}
      <section className="homepage-section">
        <h2>Why Choose Rice Now?</h2>
        <p>
          We connect you directly with Telugu farmers to deliver the best quality
          rice, ensuring freshness, authenticity, and trust.
        </p>
      </section>
    </div>
  );
};

export default HomePage;
