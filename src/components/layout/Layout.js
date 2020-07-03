import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div class="min-h-screen relative">
      <div className="pb-48">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
