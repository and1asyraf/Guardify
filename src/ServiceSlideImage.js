import React from 'react';
import './ServiceSlideImage.css'; // Import your CSS file for styling
import SI1 from './image/ServiceImage1.png';
import SI2 from './image/ServiceImage2.png';
import SI3 from './image/ServiceImage3.png';
const ServiceSlideImage = () => {
    return (
        <div className="Service-Image-Container">
        <div className='Service-Image'>
            <img src={SI1} alt='SI1' className='Image1'></img>
            <img src={SI2} alt='SI2' className='Image2'></img>
            <img src={SI3} alt='SI3'className='Image3'></img>
        </div>
        </div>
      );
    };
    

export default ServiceSlideImage;
