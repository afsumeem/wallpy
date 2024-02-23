import React, { useState } from "react";
import "../../styles/contact.css";
import img1 from "../../assets/images/contact/img1.png";
import img2 from "../../assets/images/contact/img2.png";
import { Link } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import Footer from "../../Shared/Footer/Footer";
import { iInfo } from "../../utils/icons/global_icons";

import icon1 from "../../assets/icons/contact/icon1.png";
import icon2 from "../../assets/icons/contact/icon2.png";
import icon3 from "../../assets/icons/contact/icon3.png";
import icon4 from "../../assets/icons/contact/icon4.png";
import icon5 from "../../assets/icons/contact/icon5.png";
import icon6 from "../../assets/icons/contact/icon6.png";
import RulesHeader from "../../components/common-ui/header/RulesHeader";

const Contact = () => {
  const [step, setStep] = useState(1);
  return (
    <div className="wallpaper_bg">
      <br />
      <RulesHeader />
      <div className="container contact-container">
        <h1 className="title">Contact Us</h1>
        <hr className="title_hr" />
        <section className="contact-main mx-auto h-100">
          <div className="position-relative">
            <img
              className="contact_image_large w-100 h-100"
              src={img1}
              alt=""
            />
            <img
              className="contact_image_small w-100 h-100"
              src={img2}
              alt=""
            />
            <div className="contact_social_container">
              <div
                className="d-flex align-items-center"
                style={{ gap: "10px" }}
              >
                <img width="17" height="17" src={icon1} alt="" />
                <img width="17" height="17" src={icon2} alt="" />
                <img width="17" height="17" src={icon3} alt="" />
                <img width="17" height="17" src={icon4} alt="" />
                <img width="17" height="17" src={icon5} alt="" />
                <img width="17" height="17" src={icon6} alt="" />
              </div>
              <div>{iInfo}</div>
            </div>
          </div>
          <div className="m-md-0 contact-content-section h-100 text-center py-4">
            {step === 1 && (
              <>
                <h6 className="hello_there">Hello, somebody there?</h6>
                <p className="note_72_h sm_none">
                  Note that we strive to respond to all inquiries within a
                  timeframe of 24 to 72 hours.
                </p>
                <p className="note_72_h">
                  Please always check your spam folder.
                </p>

                <div className="mt-5">
                  <input
                    className="contact-input mt-4"
                    type="text"
                    placeholder="Subject"
                  />
                  <input
                    className="contact-input mt-4"
                    type="text"
                    placeholder="Name"
                  />
                  <input
                    className="contact-input mt-4"
                    type="email"
                    placeholder="E-mail"
                  />
                  <textarea
                    className="contact-input mt-4 py-2 border-0"
                    style={{ height: "159px" }}
                    name="message"
                    placeholder="Your message"
                  ></textarea>

                  <button
                    onClick={() => setStep(2)}
                    type="submit"
                    className="contact-send-btn mt-4"
                  >
                    SEND
                  </button>
                </div>
              </>
            )}
            {step === 2 && (
              <div className="contact-second-step">
                <h6>Your message has been sent successfully. </h6>
                <p>
                  Please allow our team 24 to 72 hours to respond to your
                  inquiry. Additionally, remember to check your spam folder for
                  our response.
                </p>
                <Link to="/">
                  <button className="contact-return-btn">Return Home</button>
                </Link>
              </div>
            )}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
