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
    <div className="sub-text-carousel">
      <div className="sub-text-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((text, index) => (
          <div key={index} className="sub-text-slide">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

const SubTextSliderApp = () => {

  const slides = ['Your protection is our priority','',''];
  return (
    <div>
      <TextCarousel slides={slides} />
    </div>
  );
};

export default SubTextSliderApp;