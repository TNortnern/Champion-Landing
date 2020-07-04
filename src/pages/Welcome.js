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
      <div className="container pt-12 mx-auto lg:px-24 xl:px-20 px-8">
        <div className="xxl:w-4/5 mx-auto">
          <Logo />
          <div className="flex flex-wrap justify-center lg:justify-between lg:mt-16 xl:mt-0">
            <HeroText />
            <HeroImage />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Welcome;
