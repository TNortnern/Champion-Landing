import React from 'react';
import LogoIcon from '../assets/logo.png'
const Logo = () => {
    return (
      <div className="flex items-center flex-wrap justify-center lg:justify-start lg:space-x-2">
        <img src={LogoIcon} alt="logo" />
        <h1 className="uppercase text-main-blue-500 font-extrabold text-xl sm:text-2xl lg:text-3xl w-full text-center lg:w-auto lg:text-left">
          Champions Round
        </h1>
      </div>
    );
}

export default Logo;