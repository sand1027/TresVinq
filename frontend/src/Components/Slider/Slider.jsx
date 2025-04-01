import React, { useState, useEffect } from "react";
import "./Slider.css";

const Slider = ({ slides, interval = 3000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);

    return () => clearInterval(autoSlide);
  }, [slides.length, interval]);

  return (
    <div className="slider">
      <div
        className="slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <button
              className="slide-button"
              onClick={() => (window.location.href = slide.link)}
            >
              {slide.label}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
