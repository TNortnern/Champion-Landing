import React from 'react'

const Footer = () => {
    return (
      <div
        className="lg:h-48 py-8 lg:py-0 lg:absolute bottom-0 w-full"
        style={{
          backgroundImage: `url(${require("../../assets/bgblue.jpg")})`,
        }}
      >
        <div className="flex flex-wrap-reverse items-center h-full lg:space-y-4 justify-center lg:justify-between mx-auto lg:px-12 px-8 xxl:px-48 container space-y-8">
          <div className="w-full lg:w-auto flex flex-col items-center lg:block">
            <h3 className="uppercase text-white text-xl mb-3">Follow Us</h3>
            <div className="flex space-x-3">
              <img src={require("../../assets/facebook.png")} alt="" />
              <img
                src={require("../../assets/instagram-sketched.png")}
                alt=""
              />
              <img src={require("../../assets/twitter.png")} alt="" />
              <img src={require("../../assets/youtube.png")} alt="" />
            </div>
          </div>
          <div className="w-full lg:w-auto flex flex-col items-center lg:block">
            <div className="mb-3">
              <img src={require("../../assets/appstore.png")} alt="" />
            </div>
            <span className="text-white text-sm hidden lg:block">
              © Champions Round, Inc. 2020 All Rights Reserved
            </span>
          </div>
        </div>
        <span className="text-white text-sm text-center block lg:hidden pb-4 mt-8">
          © Champions Round, Inc. 2020 All Rights Reserved
        </span>
      </div>
    );
}

export default Footer;