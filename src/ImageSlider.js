import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Import your CSS file for styling
import prop4 from './image/Prop4.png';
import prop5 from './image/Prop5.png';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Automatically transition to the next slide every 3 seconds
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const images = [
    prop4,prop5
  ];

  return (
    <div className="slider-container">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
};

export default Slider;
