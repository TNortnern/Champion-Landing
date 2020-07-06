import React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [pb, setPb] = React.useState("");
  const updatePb = () => {
    setPb(document.getElementById("footer").offsetHeight + "px");
  };
  React.useEffect(() => {
    setPb(document.getElementById("footer").offsetHeight + "px");
    window.addEventListener("resize", updatePb);
  }, []);
  return (
    <div className="min-h-screen relative">
      <div style={{ paddingBottom: pb }}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
