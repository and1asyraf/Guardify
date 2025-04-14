// src/components/SlideShow.js
import React, { useState, useEffect } from 'react';

const SlideShow = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change the interval time as needed

    return () => clearInterval(intervalId);
  }, [slides.length]);

  return (
    <div className="slide-show">
      {slides.map((text, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default SlideShow;
