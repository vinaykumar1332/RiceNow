
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const navigate = useNavigate();
  const slides = [
    {
      src: '/assets/images/homepage/bg.jpg',
      title: 'Premium Rice, Fresh from Farmers',
      desc: 'Experience authentic Telugu rice, trusted by families.',
    },
    {
      src: '/assets/images/homepage/bg2.jpg',
      title: 'Freshly Harvested Quality',
      desc: 'Sourced directly from local farms for unmatched freshness.',
    },
    {
      src: '/assets/images/homepage/bg3.jpg',
      title: 'Pure Organic Rice',
      desc: 'Healthy, sustainable, and delivered to your door.',
    },
  ];

  const [current, setCurrent] = useState(0);

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="hero">
      <div className="hero-slider">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`hero-slide ${idx === current ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.src})` }}
          >
            <div className="hero-overlay">
              <div className="hero-content">
                <h1>{slide.title}</h1>
                <p>{slide.desc}</p>
                <button
                  onClick={() => navigate('/products')}
                  className="hero-btn"
                  aria-label="Shop Now"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="hero-dots">
        {slides.map((_, idx) => (
          <span
            key={idx}
            className={`dot ${idx === current ? 'active' : ''}`}
            onClick={() => setCurrent(idx)}
            role="button"
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;