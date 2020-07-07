import React from "react";

const Footer = () => {
  return (
    <div
      id="footer"
      className="lg:h-56 py-8 lg:py-0 absolute bottom-0 w-full"
      style={{
        backgroundImage: `url(${require("../../assets/bgblue.jpg")})`,
      }}
    >
      <div className="flex flex-wrap-reverse items-center h-full lg:space-y-4 justify-center lg:justify-between mx-auto lg:px-footer-lg xl:px-footer-xl px-8 xxl:px-footer-xxl container space-y-8">
        <div className="w-full lg:w-auto flex flex-col items-center lg:block">
          <h3 className="uppercase text-white text-xl mb-3 font-black font-circular-black">
            Follow Us
          </h3>
          <div className="flex space-x-3">
            <a
              href="http://bit.ly/champs_fb"
              target="__blank"
              className="opacity-90 transform hover:scale-105 hover:opacity-100 duration-200 ease-in-out"
            >
              <img src={require("../../assets/facebook.png")} alt="" />
            </a>
            <a
              href="http://bit.ly/champs_ig"
              target="__blank"
              className="opacity-90 transform hover:scale-105 hover:opacity-100 duration-200 ease-in-out"
            >
              <img
                src={require("../../assets/instagram-sketched.png")}
                alt="takes you to the champion round instagram"
              />
            </a>
            <a
              href="http://bit.ly/champs_twitter"
              target="__blank"
              className="opacity-90 transform hover:scale-105 hover:opacity-100 duration-200 ease-in-out"
            >
              <img src={require("../../assets/twitter.png")} alt="takes you to the champion round twitter page" />
            </a>
            <a
              href="http://bit.ly/champs_youtube"
              target="__blank"
              className="opacity-90 transform hover:scale-105 hover:opacity-100 duration-200 ease-in-out"
            >
              <img src={require("../../assets/youtube.png")} alt="takes you to the champion round youtube page" />
            </a>
          </div>
        </div>
        <div className="w-full lg:w-auto flex flex-col items-center lg:block">
          <div className="mb-3">
            <a
              href="https://apple.co/2lsCxfq"
              target="__blank"
              className="opacity-90 transform hover:scale-105 hover:opacity-100 duration-200 ease-in-out inline-block"
            >
              <img src={require("../../assets/appstore.png")} alt="takes you to the champion round app download page" />
            </a>
          </div>
          <span className="text-white text-sm hidden lg:block">
            © Champions Round, Inc. 2020 All Rights Reserved
          </span>
        </div>
      </div>
      <span className="text-white text-xs sm:text-sm text-center block lg:hidden pb-4 mt-8 px-6">
        © Champions Round, Inc. 2020 All Rights Reserved
      </span>
    </div>
  );
};

export default Footer;
