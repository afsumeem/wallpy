import React, { useContext, useState } from "react";
import "../../styles/socials.css";
import banner from "../../assets/images/socials/banner.png";
import icon1 from "../../assets/images/socials/icon1.png";
import icon2 from "../../assets/images/socials/icon2.png";
import icon3 from "../../assets/images/socials/icon3.png";
import icon4 from "../../assets/images/socials/icon4.png";
import icon5 from "../../assets/images/socials/icon5.png";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import RulesHeader from "../../components/common-ui/header/RulesHeader";

const items = [icon1, icon2, icon3, icon4, icon5];

const Socials = () => {
  return (
    <div className="wallpaper_bg">
      <br />
      <RulesHeader />

      <div className="container mx-auto socials-container">
        <h1 className="title">Socials</h1>
        <hr style={{ border: "1px solid #5A5A5A" }} />

        <div className="position-relative social_banner">
          <img src={banner} alt="" />
          <div className="socials-img-overlay"></div>
        </div>

        <section className="socials_images_container">
          {items?.map((item, index) => (
            <img key={index} src={item} className="w-100" alt="" />
          ))}
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default Socials;
