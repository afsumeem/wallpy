import React from "react";
import img1 from "../../assets/images/account-settings/profile.png";
import img2 from "../../assets/images/account-settings/img2.png";
import info from "../../assets/icons/info.png";
import icon1 from "../../assets/icons/profile-settings/icon1.png";
import icon2 from "../../assets/icons/profile-settings/icon2.png";
import icon3 from "../../assets/icons/profile-settings/icon3.png";
import icon4 from "../../assets/icons/profile-settings/icon4.png";
import icon5 from "../../assets/icons/profile-settings/icon5.png";
import icon6 from "../../assets/icons/profile-settings/icon6.png";
import icon7 from "../../assets/icons/profile-settings/icon7.png";
import icon8 from "../../assets/icons/profile-settings/icon8.png";

const ACSProfileTab = () => {
  return (
    <div className="w-100 h-100">
      <h1 className="brand-branner">Brand Branner</h1>
      <p className="profile-p mt-3">
        This banner could be prominently displayed on the main page. We
        recommend featuring your logo for improved brand identification.
      </p>
      <div className="row align-items-center">
        <span className="col-sm-3"></span>
        <p className="profile-p col-sm-6">
          Avatar size is 125x125 pixels, with a maximum file size not exceeding
          5MB.
        </p>
        <div className="d-flex justify-content-center justify-content-sm-end align-items-center col-sm-3 mt-3 mt-sm-0">
          <button className="acs-verify-request-btn">
            Request Verification
          </button>
        </div>
      </div>
      <div className="profile-avatar-section">
        <img src={img1} alt="" />
        <h1>Change Profile Avatar</h1>
      </div>
      <p className="profile-p mt-4">
        Banner size is 1747 x 300 pixels, with a maximum file size not exceeding
        10MB.
      </p>
      <div className="profile-banner-section">
        <img src={img2} alt="" />
        <h1>Change Profile Banner</h1>
      </div>
      <div className="profile-tab-input-section mt-5">
        <h1>Username</h1>
        <div className="d-flex align-items-center justify-content-center gap-3 mt-2">
          <input className="flex-grow" type="text" placeholder="KRS" />
          <img src={info} alt="" />
        </div>
      </div>
      <div className="profile-tab-input-section d-flex flex-column gap-3 justify-content-center mt-5">
        <h1>Bio</h1>
        <textarea
          className="mx-auto"
          type="text"
          placeholder="Write a small bio about you..."
        />
      </div>

      <div className="profile-tab-socials-section mt-5">
        <h1>Social Links</h1>
        <div className="d-flex justify-content-center align-items-center flex-wrap gap-4 mt-3">
          <img src={icon1} alt="" />
          <img src={icon2} alt="" />
          <img src={icon3} alt="" />
          <img src={icon4} alt="" />
          <img src={icon5} alt="" />
          <img src={icon6} alt="" />
          <img src={icon7} alt="" />
          <img src={icon8} alt="" />
        </div>
      </div>

      <div className="d-flex flex-column align-items-center justify-content-center gap-5 mt-5">
        <h1 className="brand-name">Brand Name</h1>
        <input
          className="profile-type-link"
          type="text"
          placeholder="Type link here..."
        />
        <p className="profile-p mt-4">
          The brand name will always appear beneath the brand banner. If no
          brand name is selected, it will default to the original username. For
          instance: <br /> Username: Wallpaper Society
          <br /> Brand Name: WPS
        </p>
        <button className="profile-save-btn">Save</button>
      </div>
    </div>
  );
};

export default ACSProfileTab;
