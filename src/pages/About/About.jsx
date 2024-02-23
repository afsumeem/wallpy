import React from "react";
import AboutUi from "../../components/about-ui/AboutUi";
import "../../styles/about.css";
import Footer from "../../Shared/Footer/Footer";
import RulesHeader from "../../components/common-ui/header/RulesHeader";

const About = () => {
  return (
    <div className="wallpaper_bg">
      <br />
      <RulesHeader />
      <AboutUi />
      <Footer />
    </div>
  );
};

export default About;
