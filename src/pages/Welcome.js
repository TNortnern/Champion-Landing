import React from "react";
import Logo from "../components/Logo";
import HeroText from "../components/HeroText";
import HeroImage from "../components/HeroImage";
import Layout from "../components/layout/Layout";
const Welcome = () => {
  React.useEffect(() => {
    document.title = "Champions Round - Landing"
  }, [])
  return (
    <Layout>
      <div className="container pt-12 mx-auto lg:px-12 xl:px-20 md:px-8">
        <div className="xxl:w-4/5 mx-auto">
          <Logo />
          <div className="flex flex-wrap justify-center lg:justify-between xl:mt-0">
            <HeroText />
            <HeroImage />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Welcome;
