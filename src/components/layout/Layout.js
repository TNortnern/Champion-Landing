import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen relative">
      <div className="pb-12 lg:pb-48">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
