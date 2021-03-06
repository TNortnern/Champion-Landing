import React from 'react';
import Phone from '../assets/phone.png'
const HeroImage = () => {
    return (
      <div className="lg:w-1/2 md:w-5/6 mt-12 md:mt-8 lg:mt-0">
        <img className="relative left-0 lg:left-hero-left-lg xl:left-0 h-auto lg:h-hero-img-lg" src={Phone} alt="phone" />
      </div>
    );
}

export default HeroImage;