import React from 'react'

const Footer = () => {
    return (
      <div
        className="contaner h-48 absolute bottom-0 w-full px-56"
        style={{
          backgroundImage: `url(${require("../../assets/bgblue.jpg")})`,
        }}
      >
        <div className="flex items-center h-full justify-between">
          <div>
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
          <div>
            <div className="mb-3">
              <img src={require("../../assets/appstore.png")} alt="" />
            </div>
            <span className="text-white text-sm">
              © Champions Round, Inc. 2020 All Rights Reserved
            </span>
          </div>
        </div>
      </div>
    );
}

export default Footer;