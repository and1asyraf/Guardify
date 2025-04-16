import React, { useState, useEffect } from 'react';


const TextCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); // Change the duration as needed

    return () => clearInterval(intervalId);
  }, [slides]);

  return (
    <div className="box-text-carousel">
      <div className="box-text-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((text, index) => (
          <div key={index} className="box-text-slide">
            <a href="/about" >{text}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

const BoxSlider = () => {
  const slides = ['Learn More','',''];
  return (
    <div>
      <TextCarousel slides={slides} />
      
    </div>
  );
};

export default BoxSlider;