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
    <div className="text-carousel">
      <div className="text-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((text, index) => (
          <div key={index} className="text-slide">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};

const TextSliderApp = () => {
  const slides = ['WELCOME TO GUARDIFY SDN BHD', 'RELIABLE CYBER SECURITY SERVICE', 'ON DEMAND DIGITAL ERA SECURITY'];
  return (
    <div>
      <TextCarousel slides={slides} />
      
    </div>
  );
};

export default TextSliderApp;