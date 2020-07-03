import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div class="h-screen">
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
