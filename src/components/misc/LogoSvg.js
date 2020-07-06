import React from 'react'
import LogoImage from '../../assets/logo.png'
const LogoSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="88"
      height="88"
      viewBox="0 0 88 88"
    >
      <image
        width="88"
        height="88"
        xlinkHref={LogoImage}
      />
    </svg>
  );
}

export default LogoSvg;