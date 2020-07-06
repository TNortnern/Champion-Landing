import React from 'react';
import LogoSvg from './misc/LogoSvg';
const Logo = () => {
    return (
      <div className="flex items-center flex-wrap justify-center md:justify-start lg:space-x-2">
        <LogoSvg />
        <h1 className="uppercase text-main-blue-500 font-extrabold text-xl sm:text-2xl lg:text-3xl w-full text-center md:w-auto md:text-left">
          Champions Round
        </h1>
      </div>
    );
}

export default Logo;